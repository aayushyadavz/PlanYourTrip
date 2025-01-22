import { useState } from "react";
import { useToast } from "./use-toast";
import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { AI_PROMPT } from "@/components/constants/options";
import { chatSession } from "@/services/AIModal";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { db } from "@/services/firebaseConfig";

const useCreateTrip = () => {
    const [place, setPlace] = useState();
    const [formData, setFormData] = useState([]);
    const { toast } = useToast();
    const [openDialog, setOpenDialog] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const login = useGoogleLogin({
        onSuccess: tokenResponse => {
            console.log(tokenResponse)
            getUserProfile(tokenResponse)
        },
        onError: error => console.log(error)
    })

    const onGenerateTrip = async () => {
        const user = localStorage.getItem('user')

        if (!user) {
            setOpenDialog(true)
            return
        }

        if (!formData?.noOfDays || formData.noOfDays < 1 || formData.noOfDays > 5) {
            toast({
                title: "😕 Please enter a valid number of days (between 1 and 5)"
            })
            return;
        }

        if (!formData?.budget || !formData?.location || !formData?.traveler) {
            toast({
                title: "😕 Please fill all the details"
            })
            return;
        }

        setLoading(true)

        const FINAL_PROMPT = AI_PROMPT
            .replace('{location}', formData?.location?.label)
            .replace('{totalDays}', formData?.noOfDays)
            .replace('{traveler}', formData?.traveler)
            .replace('{budget}', formData?.budget)
            .replace('{totalDays}', formData?.noOfDays)

        const result = await chatSession.sendMessage(FINAL_PROMPT)

        setLoading(false)

        saveAiTrip(result?.response?.text())
    };

    const saveAiTrip = async (tripData) => {
        setLoading(true)

        const docId = Date.now().toString()
        const userInfo = JSON.parse(localStorage.getItem('user'))

        await setDoc(doc(db, "AITripData", docId), {
            aiResponse: JSON.parse(tripData),
            userSelection: formData,
            userEmail: userInfo?.email,
            id: docId
        });

        setLoading(false)
        navigate('/view-trip/' + docId)
    }

    const getUserProfile = (tokenInfo) => {
        axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`, {
            headers: {
                Authorization: `Bearer ${tokenInfo?.access_token}`,
                Accept: 'Application/json'
            }
        }).then((resp) => {
            console.log(resp);
            localStorage.setItem('user', JSON.stringify(resp.data))
            setOpenDialog(false)
            onGenerateTrip()
        })
    }

    return {
        place,
        setPlace,
        handleInputChange,
        formData,
        loading,
        onGenerateTrip,
        openDialog,
        login
    }
}

export default useCreateTrip
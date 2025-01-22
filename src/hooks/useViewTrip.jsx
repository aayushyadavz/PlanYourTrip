import { useParams } from "react-router-dom";
import { useToast } from "./use-toast";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";

const useViewTrip = () => {
    const { tripId } = useParams()
    const { toast } = useToast();
    const [trip, setTrip] = useState([])

    useEffect(() => {
        tripId && getTripData()
    }, [tripId])

    const getTripData = async () => {
        const docRef = doc(db, "AITripData", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setTrip(docSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            toast('No Trip Found!')
        }
    }

    return { trip }
}

export default useViewTrip
import { PHOTO_REF_URL } from "@/components/constants/options"
import { db } from "@/services/firebaseConfig"
import { getPlaceDetails } from "@/services/GlobalApi"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const useMyTrip = (trip) => {
    const navigate = useNavigate()
    const [userTrip, setUserTrip] = useState([])

    useEffect(() => {
        getUserTrips()
    }, [])

    const getUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'))

        if (!user) {
            navigate("/")
            return;
        }

        const q = query(collection(db, "AITripData"), where("userEmail", "==", user?.email));

        const querySnapshot = await getDocs(q);

        const trips = []
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            trips.push(doc.data())
        });

        setUserTrip(trips)
    }

    // UserTripCard
    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        trip && getPlacePhoto()
    }, [trip])

    const getPlacePhoto = async () => {
        const data = {
            textQuery: trip?.userSelection?.location?.label
        }
        const result = await getPlaceDetails(data).then(res => {
            console.log(res.data.places[0].photos[3].name)

            const photoUrl = PHOTO_REF_URL.replace('NAME', res.data.places[0].photos[3].name)
            console.log(photoUrl);
            setPhotoUrl(photoUrl)
        })
    }

    return {
        userTrip,
        photoUrl,
        handleDelete
    }
}

export default useMyTrip
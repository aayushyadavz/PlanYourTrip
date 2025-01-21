import { useToast } from "@/hooks/use-toast";
import { db } from "@/services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";

const ViewTrip = () => {
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

    return (
        <div className="px-1 sm:px-14 md:px-20 lg:px-44 xl:px-56">
            <InfoSection trip={trip} />
            <Hotels trip={trip} />
            <PlacesToVisit trip={trip} />
            <Footer />
        </div>
    )
}

export default ViewTrip
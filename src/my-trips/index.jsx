import { db } from "@/services/firebaseConfig"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import UserTripCard from "./components/UserTripCard"

const MyTrips = () => {
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

    return (
        <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
            <h2 className="font-bold text-3xl">My Trips</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                {userTrip.length > 0 ? userTrip.map((trip, index) => (<UserTripCard key={index} trip={trip} />)) : [1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index} className="h-[300px] w-full bg-slate-200 animate-pulse rounded-xl"></div>
                ))}
            </div>
        </div>
    )
}

export default MyTrips
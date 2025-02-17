import { Link } from "react-router-dom"
import { RiDeleteBin6Fill } from "react-icons/ri";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/services/firebaseConfig";
import useMyTrip from "@/hooks/useMyTrip";

const UserTripCard = ({ trip }) => {
    const { photoUrl } = useMyTrip(trip)

    const handleDelete = async (e) => {
        e.preventDefault()

        try {
            const tripRef = doc(db, "AITripData", trip.id);
            await deleteDoc(tripRef);
            window.location.reload()
        } catch (error) {
            console.error("Error deleting trip:", error);
        }
    }

    return (
        <Link to={'/view-trip/' + trip.id}>
            <div className="border p-2 h-[210px] sm:h-[240px] rounded-xl shadow-lg cursor-pointer relative">
                <img src={photoUrl} alt="" className="rounded-xl object-cover h-28 sm:h-36 w-full" />
                <div
                    className="absolute top-3 right-3 bg-white rounded-full p-2 hover:shadow-lg hover:scale-110 transition-all"
                    onClick={handleDelete}
                ><RiDeleteBin6Fill className="text-[#f56551] text-lg" /></div>
                <div>
                    <h2 className="font-bold text-lg text-black line-clamp-1 my-1">
                        {trip.userSelection.location.label}
                    </h2>
                    <h2 className="text-sm text-gray-500">
                        {trip.userSelection.noOfDays} Days trip with {trip.userSelection.budget} budget
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default UserTripCard
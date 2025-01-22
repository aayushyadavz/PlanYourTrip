import useMyTrip from "@/hooks/useMyTrip"
import { Link } from "react-router-dom"

const UserTripCard = ({ trip }) => {
    const { photoUrl } = useMyTrip(trip)

    return (
        <Link to={'/view-trip/' + trip.id}>
            <div className="border p-2 h-[210px] sm:h-[240px] rounded-xl hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <img src={photoUrl} alt="" className="rounded-xl object-cover h-28 sm:h-36 w-full" />
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
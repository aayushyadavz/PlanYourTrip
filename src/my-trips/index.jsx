import useMyTrip from "@/hooks/useMyTrip"
import UserTripCard from "./components/UserTripCard"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const MyTrips = () => {
    const { userTrip } = useMyTrip()

    return (
        <div className="sm:px-28 md:px-32 lg:px-56 xl:px-72 px-1 mt-5 sm:my-10">
            <h2 className="font-bold text-2xl sm:text-3xl">My Trips</h2>
            {userTrip.length === 0 ? (
                <div className="w-full text-center text-lg text-black font-semibold mt-20">
                    <p className="text-xl">You have no trips yet 😕</p>
                    <Link to={'/create-trip'}>
                        <Button className="cursor-pointer my-5 rounded-full text-black border border-black bg-orange-300 hover:bg-gray-300">+ Create Trip</Button>
                    </Link>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 mt-7 sm:mt-10">
                    {userTrip.map((trip, index) => <UserTripCard key={index} trip={trip} />)}
                </div>
            )}
        </div>
    )
}

export default MyTrips
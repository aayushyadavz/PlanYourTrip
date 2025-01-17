import { Button } from "@/components/ui/button"
import { FaShareAlt } from "react-icons/fa";

const InfoSection = ({ trip }) => {
    return (
        <div>
            <img src="https://www.rosenaviation.com/wp-content/uploads/2024/02/Longest-commercial-flights-Rosen-Aviation-scaled.jpeg" alt="Plane" className="h-[300px] w-full object-cover rounded-xl" />
            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.label}</h2>
                    <div className="flex gap-5">
                        <p className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">📅 {trip?.userSelection?.noOfDays} Days</p>
                        <p className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">💰 {trip?.userSelection?.budget} Budget</p>
                        <p className="p-1 px-3 bg-gray-200 rounded-full text-gray-500">🥂 No. of Traveler: {trip?.userSelection?.traveler} </p>
                    </div>
                </div>
                <Button><FaShareAlt /></Button>
            </div>
        </div>
    )
}

export default InfoSection
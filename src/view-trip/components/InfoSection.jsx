import useInfoSection from "@/hooks/useInfoSection"

const InfoSection = ({ trip }) => {
    const { photoUrl } = useInfoSection(trip)

    return (
        <div className="mt-5">
            <img src={photoUrl} alt="Plane" className="h-[250px] sm:h-[300px] w-full object-cover rounded-xl shadow-xl" />
            <div className="flex justify-between items-center">
                <div className="my-5 flex flex-col gap-2">
                    <h2 className="font-bold text-2xl">{trip?.userSelection?.location?.label}</h2>
                    <div className="flex gap-2 sm:gap-5">
                        <p className="p-1 px-3 text-center bg-gray-200 rounded-full text-gray-500">📅 {trip?.userSelection?.noOfDays} Days</p>
                        <p className="p-1 px-3 text-center bg-gray-200 rounded-full text-gray-500">💰 {trip?.userSelection?.budget} Budget</p>
                        <p className="p-1 px-3 text-center bg-gray-200 rounded-full text-gray-500">🥂 No. of Traveler: {trip?.userSelection?.traveler} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
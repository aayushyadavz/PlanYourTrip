import { getPlaceDetails } from "@/services/GlobalApi";
import { useEffect, useState } from "react";

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/NAME/media?max_height_px=1000&max_width_px=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const InfoSection = ({ trip }) => {
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
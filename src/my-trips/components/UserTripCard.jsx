import { getPlaceDetails } from "@/services/GlobalApi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/NAME/media?max_height_px=1000&max_width_px=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const UserTripCard = ({ trip }) => {
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
        <Link to={'/view-trip/' + trip.id}>
            <div className="border p-2 h-[210px] sm:h-[240px] rounded-xl hover:shadow-lg hover:scale-105 transition-all cursor-pointer">
                <img src={photoUrl} alt="" className="rounded-xl object-cover h-28 sm:h-36 w-full" />
                <div>
                    <h2 className="font-bold text-lg text-black line-clamp-1 my-1">
                        {trip.userSelection.location.label}
                    </h2>
                    <h2 className="text-sm text-gray-500">
                        {trip.userSelection.noOfDays} Days trip with {trip.userSelection.budget} buget
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default UserTripCard
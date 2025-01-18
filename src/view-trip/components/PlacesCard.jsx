import { getPlaceDetails } from "@/services/GlobalApi"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/NAME/media?max_height_px=1000&max_width_px=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const PlacesCard = ({ place }) => {
    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        place && getPlacePhoto()
    }, [place])

    const getPlacePhoto = async () => {
        const data = {
            textQuery: place.place_name
        }
        const result = await getPlaceDetails(data).then(res => {
            console.log(res.data.places[0].photos[3].name)

            const photoUrl = PHOTO_REF_URL.replace('NAME', res.data.places[0].photos[3].name)
            console.log(photoUrl);
            setPhotoUrl(photoUrl)
        })
    }

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.place_name} target="_blank">
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md'>
                <img src={photoUrl} className='w-[130px] h-[130px] rounded-xl object-cover' />
                <div>
                    <h2 className='font-bold text-lg'>{place.place_name}</h2>
                    <p className='text-sm text-gray-500'>{place.description}</p>
                    <p className='mt-2'>{place.travel_time_to_next}</p>
                </div>
            </div>
        </Link>
    )
}

export default PlacesCard
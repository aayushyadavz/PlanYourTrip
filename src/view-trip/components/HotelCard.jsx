import { getPlaceDetails } from '@/services/GlobalApi'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const PHOTO_REF_URL = 'https://places.googleapis.com/v1/NAME/media?max_height_px=1000&max_width_px=1000&key=' + import.meta.env.VITE_GOOGLE_PLACE_API_KEY

const HotelCard = ({ hotel }) => {
    const [photoUrl, setPhotoUrl] = useState()

    useEffect(() => {
        hotel && getPlacePhoto()
    }, [hotel])

    const getPlacePhoto = async () => {
        const data = {
            textQuery: hotel?.name
        }
        const result = await getPlaceDetails(data).then(res => {
            console.log(res.data.places[0].photos[3].name)

            const photoUrl = PHOTO_REF_URL.replace('NAME', res.data.places[0].photos[3].name)
            console.log(photoUrl);
            setPhotoUrl(photoUrl)
        })
    }

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel.name + ',' + hotel.address} target="_blank">
            <div className="hover:scale-105 transition-all cursor-pointer">
                <img src={photoUrl} className="rounded-xl h-[180px] w-full object-cover" />
                <div className="my-2 flex flex-col gap-2">
                    <h2 className="font-medium">{hotel.name}</h2>
                    <h2 className="text-xs text-gray-500">📍 {hotel.address}</h2>
                    <h2 className="text-sm">💰 {hotel.price_range}</h2>
                    <h2 className="text-sm">⭐ {hotel.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
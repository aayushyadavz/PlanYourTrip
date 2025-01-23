
import usePlacesCard from "@/hooks/usePlacesCard"
import { Link } from "react-router-dom"

const PlacesCard = ({ place }) => {
    const { photoUrl } = usePlacesCard(place)

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.place_name} target="_blank">
            <div className='border rounded-xl p-3 mt-2 flex gap-4 sm:gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md'>
                <img src={photoUrl} className='w-[35%] h-[120px] sm:h-[125px] rounded-xl object-cover' />
                <div className="w-[65%]">
                    <h2 className='font-bold text-lg text-black line-clamp-1'>{place.place_name}</h2>
                    <p className='text-sm text-gray-500 leading-tight line-clamp-3'>{place.description}</p>
                    <p className='mt-2 leading-tight text-sm text-black line-clamp-2'>{place.travel_time_to_next}</p>
                </div>
            </div>
        </Link>
    )
}

export default PlacesCard
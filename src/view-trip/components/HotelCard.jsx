import useHotelCard from '@/hooks/useHotelCard'
import { Link } from 'react-router-dom'

const HotelCard = ({ hotel }) => {
    const { photoUrl } = useHotelCard(hotel)

    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel.name + ',' + hotel.address} target="_blank">
            <div className="hover:scale-105 transition-all cursor-pointer border rounded-xl p-1 hover:shadow-md">
                <img src={photoUrl} className="rounded-xl h-[140px] sm:h-[180px] w-full object-cover shadow-lg" />
                <div className="my-2 flex flex-col gap-[2px] sm:gap-1">
                    <h2 className="font-medium text-black leading-tight line-clamp-1">{hotel.name}</h2>
                    <h2 className="text-xs text-gray-500 line-clamp-2">📍 {hotel.address}</h2>
                    <h2 className="text-sm text-black">💰 {hotel.price_range}</h2>
                    <h2 className="text-sm text-black">⭐ {hotel.rating}</h2>
                </div>
            </div>
        </Link>
    )
}

export default HotelCard
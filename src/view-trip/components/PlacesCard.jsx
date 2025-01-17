import { Link } from "react-router-dom"

const PlacesCard = ({ place }) => {
    return (
        <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.place_name} target="_blank">
            <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all cursor-pointer hover:shadow-md'>
                <img src='https://www.rosenaviation.com/wp-content/uploads/2024/02/Longest-commercial-flights-Rosen-Aviation-scaled.jpeg' className='w-[130px] h-[130px] rounded-xl object-cover' />

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
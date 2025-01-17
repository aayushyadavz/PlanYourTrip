import { Link } from "react-router-dom"

const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {trip?.aiResponse?.travel_plan?.hotel_options.map((hotel, index) => (
                    <Link to={'https://www.google.com/maps/search/?api=1&query=' + hotel?.name + ',' + hotel?.address} key={index} target="_blank">
                        <div className="hover:scale-105 transition-all cursor-pointer">
                            <img src="https://www.rosenaviation.com/wp-content/uploads/2024/02/Longest-commercial-flights-Rosen-Aviation-scaled.jpeg" className="rounded-xl" />
                            <div className="my-2 flex flex-col gap-2">
                                <h2 className="font-medium">{hotel?.name}</h2>
                                <h2 className="text-xs text-gray-500">📍 {hotel?.address}</h2>
                                <h2 className="text-sm">💰 {hotel?.price_range}</h2>
                                <h2 className="text-sm">⭐ {hotel?.rating}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Hotels
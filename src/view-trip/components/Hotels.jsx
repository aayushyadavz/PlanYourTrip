import HotelCard from "./HotelCard"

const Hotels = ({ trip }) => {
    return (
        <div>
            <h2 className="font-bold text-xl mt-5">Hotel Recommendations</h2>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {trip?.aiResponse?.hotels.map((hotel, index) => (
                    <HotelCard key={index} hotel={hotel} />
                ))}
            </div>
        </div >
    )
}

export default Hotels
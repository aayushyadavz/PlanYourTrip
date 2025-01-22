import PlacesCard from './PlacesCard'

const PlacesToVisit = ({ trip }) => {
    return (
        <div className='mt-6 border-t-2'>
            <div className='mt-5'>
                <h2 className='font-bold text-xl'>Places to Visit</h2>

                <div>
                    {trip?.aiResponse?.itinerary.map((item, index) => (
                        <div key={index} className='mt-3'>
                            <h2 className='font-medium text-lg mb-3'>Day {item.day} :</h2>
                            <div className='grid md:grid-cols-2 gap-3 sm:gap-5 border p-2'>
                                {item?.locations.map((place, index) => (
                                    <div key={index}>
                                        <h2 className='font-medium text-orange-600 line-clamp-1'>{place.best_time_to_visit} :</h2>
                                        <PlacesCard place={place} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PlacesToVisit
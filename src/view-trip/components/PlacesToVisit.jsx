import React from 'react'
import PlacesCard from './PlacesCard'

const PlacesToVisit = ({ trip }) => {
    return (
        <div>
            <h2 className='font-bold text-lg'>Places to Visit</h2>

            <div>
                {trip?.aiResponse?.itinerary.map((item, index) => (
                    <div key={index} className='mt-5'>
                        <h2 className='font-medium text-lg'>Day {item.day}</h2>
                        <div className='grid md:grid-cols-2 gap-5'>
                            {item?.locations.map((place, index) => (
                                <div key={index}>
                                    <h2 className='font-medium text-orange-600'>{place.best_time_to_visit}</h2>
                                    <PlacesCard place={place} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlacesToVisit
import { PHOTO_REF_URL } from "@/components/constants/options"
import { getPlaceDetails } from "@/services/GlobalApi"
import { useEffect, useState } from "react"

const usePlacesCard = (place) => {
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

    return {
        photoUrl
    }
}

export default usePlacesCard
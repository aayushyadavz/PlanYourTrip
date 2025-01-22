import InfoSection from "../components/InfoSection";
import Hotels from "../components/Hotels";
import PlacesToVisit from "../components/PlacesToVisit";
import Footer from "../components/Footer";
import useViewTrip from "@/hooks/useViewTrip";

const ViewTrip = () => {
    const { trip } = useViewTrip()

    return (
        <div className="px-1 sm:px-14 md:px-20 lg:px-44 xl:px-56">
            <InfoSection trip={trip} />
            <Hotels trip={trip} />
            <PlacesToVisit trip={trip} />
            <Footer />
        </div>
    )
}

export default ViewTrip
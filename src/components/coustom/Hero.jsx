import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-14 sm:mx-24 md:mx-56 gap-6 sm:gap-9">
      <h1 className="font-extrabold text-4xl sm:text-5xl sm:text-center mt-16">
        <span className="text-[#f56551]">
          Discover Your Next Adventure With AI:
        </span>{" "}
        Personalized Itineries at Your Fingertips
      </h1>
      <p className="text-base sm:text-xl text-gray-500 sm:text-center">
        Your personal trip planner and travel curator, creating custom itineries
        tailored to your interests and budget.
      </p>
      <Link to={"/create-trip"}>
        <Button className="bg-black text-white rounded-xl hover:bg-orange-200 hover:text-black">Get Started, It's Free</Button>
      </Link>
    </div>
  );
};

export default Hero;

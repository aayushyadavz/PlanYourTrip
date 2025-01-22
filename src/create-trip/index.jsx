import {
  selectBudgetOptions,
  selectTravelesList,
} from "@/components/constants/options";
import { Input } from "@/components/ui/input";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import useCreateTrip from "@/hooks/useCreateTrip";

const CreateTrip = () => {
  const {
    place,
    setPlace,
    handleInputChange,
    formData,
    loading,
    onGenerateTrip,
    openDialog,
    login
  } = useCreateTrip()

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h2 className="font-bold text-3xl">
        Tell us your{" "}
        <span className="text-[#f56551]">travel preferences</span>
      </h2>
      <p className="mt-3 text-gray-500 text-xl">
        Just provide some basic information, and our trip planner will generate
        a cutomized itinerary based on your preferences.
      </p>

      <div className="mt-20 flex flex-col gap-9">
        <div>
          <h2 className="text-xl my-3 font-medium">
            What is your destination of choice?
          </h2>
          <GooglePlacesAutocomplete
            apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
            selectProps={{
              place,
              onChange: (v) => {
                setPlace(v);
                handleInputChange("location", v);
              },
            }}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            How many days are you planning your trip?
          </h2>
          <Input
            placeholder={"Ex.3"}
            type="number"
            onChange={(e) => handleInputChange("noOfDays", e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
            {selectBudgetOptions.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.budget == item.title && "shadow-xl border-black"
                  }`}
                onClick={() => handleInputChange("budget", item.title)}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on travelling with on your next adventure?
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-5">
            {selectTravelesList.map((item, index) => (
              <div
                key={index}
                className={`p-4 border rounded-lg hover:shadow-lg cursor-pointer ${formData?.traveler == item.people && "shadow-xl border-black"
                  }`}
                onClick={() => handleInputChange("traveler", item.people)}
              >
                <h2 className="text-3xl">{item.icon}</h2>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <h2 className="text-sm text-gray-500">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-end">
        <Button disabled={loading} onClick={onGenerateTrip} className="w-48 bg-black text-white rounded-xl hover:bg-orange-200 hover:text-black">
          {loading ? <AiOutlineLoading3Quarters className="animate-spin h-7 w-7" /> : "Generate Trip"}
        </Button>
      </div>

      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle></DialogTitle>
            <DialogDescription>
              <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="logo" className="w-10" />
                <div className="font-bold text-xl text-black">
                  Plan<span className="text-[#f56551]">Your</span>Trip
                </div>
              </div>
              <div>
                <h2 className="font-bold text-lg mt-7">Sign In With Google</h2>
                <p>Sign in to the App with Google Authentication securely</p>
              </div>
              <Button onClick={login} className="w-full mt-5 flex items-center gap-2">
                <FcGoogle className="h-7 w-7" /> Sign In With Google
              </Button>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateTrip;

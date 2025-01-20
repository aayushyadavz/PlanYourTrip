import { useState } from "react";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from "axios";

const Header = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [openDialog, setOpenDialog] = useState(false)

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log(tokenResponse)
      getUserProfile(tokenResponse)
    },
    onError: error => console.log(error)
  })

  const getUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${tokenInfo?.access_token}`, {
      headers: {
        Authorization: `Bearer ${tokenInfo?.access_token}`,
        Accept: 'Application/json'
      }
    }).then((resp) => {
      console.log(resp);
      localStorage.setItem('user', JSON.stringify(resp.data))
      setOpenDialog(false)
      window.location.reload()
    })
  }

  return (
    <div className="p-3 flex items-center px-5 justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="w-10" />
        <p className="font-bold text-xl">
          Plan<span className="text-[#f56551]">Your</span>Trip
        </p>
      </div>
      <div>
        {user ?
          <div className="flex items-center gap-3">
            <a href="/create-trip">
              <Button variant="outline" className="rounded-full">Create Trip</Button>
            </a>
            <a href="/my-trips">
              <Button variant="outline" className="rounded-full">My Trips</Button>
            </a>
            <Popover>
              <PopoverTrigger><img src={user?.picture} alt="" className="w-[35px] h-[35px] rounded-full cursor-pointer" /></PopoverTrigger>
              <PopoverContent>
                <h2 className="cursor-pointer" onClick={() => {
                  googleLogout()
                  localStorage.clear()
                  window.location.reload()
                }}>Logout</h2>
              </PopoverContent>
            </Popover>
          </div> : <Button onClick={() => setOpenDialog(true)}>Sign In</Button>
        }
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

export default Header;
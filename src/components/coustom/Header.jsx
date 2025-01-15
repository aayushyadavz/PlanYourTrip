import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="p-3 flex items-center px-5 justify-between shadow-sm">
      <div className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="w-10" />
        <p className="font-bold text-xl">
          Plan<span className="text-[#f56551]">Your</span>Trip
        </p>
      </div>
      <Button>Sign In</Button>
    </div>
  );
};

export default Header;

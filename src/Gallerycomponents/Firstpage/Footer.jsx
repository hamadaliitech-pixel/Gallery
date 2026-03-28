
import {
  Home,
  Telescope,
  ShoppingBasket,
  UserPen,
 
} from "lucide-react";

const Footer = () => {
  
  return (
    <div className=" fixed z-50 bottom-8 sm:bottom-8 px-5 w-full rounded-full flex flex-col justify-center items-center">
      <div className="bg-white/50 backdrop-blur-lg py-4 px-2 text-black flex gap-6 rounded-full justify-around items-center w-4/5 sm:w-1/2">
        <Home className="text-2xl" />
        <Telescope className="text-2xl" />
        <ShoppingBasket className="text-2xl" />
        <UserPen className="text-2xl" />
      </div>
    </div>
  );
};

export default Footer;
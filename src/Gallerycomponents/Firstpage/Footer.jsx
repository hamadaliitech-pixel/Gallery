import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Home, Telescope, ShoppingBasket, UserPen } from "lucide-react";
import { increment, decrement } from "../../counter/Countit";

const Footer = () => {
  const count = useSelector((state) => state.counter.value);
  let dispatch = useDispatch();

  //--------------------------------

  return (
    <div>
      {/* -------------Next/Previous buttons--------------- */}
      <div
        className="
            fixed bottom-20 w-full z-10
        font-extrabold flex justify-center items-center  
        "
      >
        <div className="flex sm:w-1/3 w-1/2 justify-between p-2 text-black rounded-t-3xl bg-white/50 backdrop-blur-lg items-center ">
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className=" grid place-items-center "
          >
            <ArrowLeft
              className="hover:shadow-xl transition-all duration-300 hover:text-white
            "
            />
          </button>
          <div className="font-serif h-8 text-lg">{count}</div>
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="grid place-items-center"
          >
            <ArrowRight className="hover:shadow-xl transition-all duration-300 hover:text-white" />
          </button>
        </div>
        <div className=" fixed z-50 bottom-8 sm:bottom-8 px-5 w-full rounded-full flex flex-col justify-center items-center">
          <div className="bg-white/50 backdrop-blur-lg  px-2 py-4 flex gap-6 rounded-full justify-around items-center w-4/5 sm:w-1/2">

            <Home className="text-2xl
             hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300
            hover:scale-105" />
            <Telescope
              className="text-2xl
            hover:rotate-10 hover:text-white hover:-translate-y-1 transition-transform duration-300
            hover:scale-105
            "
            />
            <ShoppingBasket
              className="
                text-2xl
                hover:rotate-10
                hover:text-white
                hover:-translate-y-1
                transition-transform
                duration-300
                hover:scale-105"
            />
            <UserPen
              className="
                rounded-full
                text-2xl
                hover:scale-105
                hover:-translate-y-1
                hover:text-white 
                transition-transform 
                duration-300
                "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

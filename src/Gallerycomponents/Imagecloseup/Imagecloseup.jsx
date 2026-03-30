import { ArrowLeft, ArrowRight } from "lucide-react";
import Api, { ApiFactchedData } from "../../Api/Api";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Imagecloseup = () => {
  let dt = useNavigate()
const location = useLocation()
const massage = location.state?.item;  


// --------------Fetching data--------------------
  // const data = useContext(ApiFactchedData);
  // async function FetchingMainData() {
  //   let date = await data;
  //   return date;
  // }
  // FetchingMainData();
  // console.log(FetchingMainData());
// ---------------------------------------------
  function run() {
    nevigate(-1);
  }

  function IncreaseByOne(prop) {
    console.log(prop);
  }

  return (
    <div
      style={{
        backgroundImage: `url(${massage.download_url})`,
      }}
      className="h-screen bg-cover bg-center flex flex-col justify-between"
    >
      <div className="upperdiv h-full sm:flex justify-between ">
        <div className="w-full flex flex-col items-center pt-10 justify-end text-black rounded-b-2xl">
          <span className="font-serif text-5xl sm:leading-snug">Explore</span>
          <span className="font-semibold sm:text-2xl justify-center flex items-center">
            This Image is Captured by ""
          </span>
        </div>

        {/* Btns */}

        <div className="Buttons flex justify-between">
          <ArrowLeft
            className="btn
            bg-amber-400 
            text-white 
           pointer-events-none  
           sm:block 
           h-12 
           w-12 p-1 
           rounded-full"
          />
          <ArrowRight className="btn bg-amber-400  sm:block text-white h-12 w-12 p-1 rounded-full" />
        </div>
      </div>

      <div className="h-1/2 overflow-scroll w-screen flex bg-amber-50 gap-5 flex-nowrap">
        downcontent
      </div>
    </div>
  );
};

export default Imagecloseup;

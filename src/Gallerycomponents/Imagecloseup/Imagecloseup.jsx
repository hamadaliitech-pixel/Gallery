import { ArrowLeft, ArrowRight } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const Imagecloseup = () => {
  const location = useLocation();
  const nevigate = useNavigate();
  function run() {
    nevigate(-1);
  }

  const item = location.state?.item;
  const page = location.state?.page;

  useEffect(() => {
    async function name() {
      if (!item.id || !page) {
        const { data } = await axios.get(
          `https://picsum.photos/v2/list?page=${page}&limit=15`,
        );
        console.log(data);
      }
    }
    name();
  }, [page]);

  function IncreaseByOne(prop) {
    console.log(prop);
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://picsum.photos/id/${item.id}/${item.width}/${item.height})`,
      }}
      className="h-screen bg-cover bg-center flex flex-col justify-between"
    >
      <div className="upperdiv h-full sm:flex justify-between ">
        <div className="w-full flex flex-col items-center pt-10 justify-end text-black rounded-b-2xl">
          <span className="font-serif text-5xl sm:leading-snug">Explore</span>
          <span className="font-semibold sm:text-2xl justify-center flex items-center">
            This Image is Captured by "{item.author}"
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
          <ArrowRight
            className="btn bg-amber-400  sm:block text-white h-12 w-12 p-1 rounded-full"
            onClick={() => {
              console.log(item.id);
              IncreaseByOne(item.id)
            }}
          />
        </div>
        <button onClick={run}>Back</button>

      </div>

      <div className="h-1/2 overflow-scroll w-screen flex bg-amber-50 gap-5 flex-nowrap">
        downcontent
      </div>

      <Outlet />
    </div>
  );
};

export default Imagecloseup;

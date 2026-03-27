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

  // console.log('clked:',item.id);

  // function runin(prop) {
  //   console.log('runnin',prop);
  //   return prop
  // }

  // console.log(runin());

  let a = [];
  console.log(a);

  // console.log('display:',a);

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

  return (
    <div
      style={{
        backgroundImage: `url(https://picsum.photos/id/${item.id}/${item.width}/${item.height})`,
      }}
      className="h-screen bg-cover bg-center flex flex-col justify-between"
    >
      <div className="upperdiv h-full sm:flex justify-between items-center">
        <ArrowLeft className="btn bg-amber-400 pointer-events-none hidden sm:block text-white h-12 w-12 p-1 rounded-full" />
        <div className="w-full flex flex-col items-center pt-10 justify-end text-black rounded-b-2xl">
          <span className="font-serif text-5xl sm:leading-snug">Explore</span>
          <span className="font-semibold sm:text-2xl justify-center flex items-center">
            This Image is Captured by "{item.author}"
          </span>
        </div>
        <ArrowRight
          className="btn bg-amber-400 hidden sm:block text-white h-12 w-12 p-1 rounded-full"
          onClick={() => {
            let idd = Number(item.id + 2);
            console.log(idd + 2);
            a.push(idd);
          }}
        />
        <button onClick={run}>Back</button>
      </div>

      <div className="h-1/2 bg-amber-50 gap-5">
          <div className="h-full bg-red-500 flex overflow-scroll gap-3">
            <img
              src={item.download_url}
              alt=""
              className="h-full w-[40vw] content-center object-cover overflow-hidden rounded-3xl"
            />
            <img
              src={item.download_url}
              alt=""
              className="h-full w-[40vw] content-center object-cover overflow-hidden rounded-3xl"
            />
            <img
              src={item.download_url}
              alt=""
              className="h-full w-[40vw] content-center object-cover overflow-hidden rounded-3xl"
            />
          </div>
      </div>

      <Outlet />
    </div>
  );
};

export default Imagecloseup;

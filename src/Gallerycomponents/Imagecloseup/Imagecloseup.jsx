import { ApiFactchedData } from "../../Api/Api";
import { useContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Imagecloseup = () => {
  let nevigate = useNavigate();
  const location = useLocation();
  const massage = location.state?.item;

  const [first, setfirst] = useState(massage.id);
  const [rendr, setrendr] = useState([]);

  // ----------Fetching data--------------------
  const data = useContext(ApiFactchedData);

  useEffect(() => {
    async function run() {
      let fetchedData = await data;
      setrendr(fetchedData);
    }
    run();
  }, [data]);


  // ---------------------------------------------

  function run() {
    nevigate(-1);
  }

  return (
    <div
      style={{
        backgroundImage: `url(https://picsum.photos/id/${first}/5000/3333)`,
      }}
      className="h-screen bg-cover bg-center items-center flex flex-col justify-end
      "
    >
      <div className="w-full p-3 flex flex-col pt-10 leading-snug rounded-b-2xl ">
        <span className="font-serif text-5xl sm:leading-snug">
          Explore{" "}
          <button
            onClick={() => {
              run();
            }}
            className="text-lg border py-1 rounded-2xl bg-gray-400 px-3"
          >
            <ArrowLeft className="hover:shadow-xl transition-all duration-300 hover:text-white" />
          </button>
        </span>
        <span className="font-semibold sm:text-2xl flex">
          This Image is Captured by "{massage.author}"
        </span>
      </div>
      {/* Btns */}

      {/* Cards Collection */}
      <div className=" bg-linear-to-t from-black via-gray-800 to-white/10 shadow-xl w-screen h-1/3 ">
        <div className="cards-container flex flex-row items-center justify-start gap-3 p-2 h-full overflow-x-scroll scollbar-hidden">
          {rendr.map((item) => (
            <img
              key={item.id}
              src={item.download_url}
              alt=""
              onClick={() => {
                setfirst(item.id);
              }}
              className="w-1/2 h-full object-cover rounded-3xl"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imagecloseup;

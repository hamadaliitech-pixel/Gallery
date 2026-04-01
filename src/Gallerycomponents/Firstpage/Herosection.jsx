import { useContext, useEffect, useState } from "react";
import { ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ApiFactchedData } from "../../Api/Api";

const Herosection = () => {
  const navigate = useNavigate();
  const [Render, setRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const data = useContext(ApiFactchedData);

  useEffect(() => {
    async function run() {
      let fetchedData = await data;
      setRender(fetchedData);
      setIsLoading(false);
    }
    run();
  }, [data]);


  return (
    <>
      <div className="w-full flex justify-between items-center text-3xl">
        {isLoading && "loading..."}
      </div>

      <div className="Main_image_container grid grid-cols-2 sm:grid-cols-3 overflow-y-scroll gap-3 p-2 items-center">
        {Render.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.download_url})` }}
            className="flex items-end h-60 bg-cover rounded-2xl overflow-hidden sm:h-56 cursor-pointer shadow-black shadow-md hover:scale-95 transition-transform"
            onClick={() => {
              navigate(`/Imagecloseup`, {
                state: { item: item },
              });
            }}
          >
            <div className="text-white inset-0 bg-linear-to-t p-2 font-serif from-black/80 to-transparent w-full">
              {item.author}
              <div
                style={{ fontFamily: "Poppins, sans-serif" }}
                className="text-sm flex justify-between items-center text-gray-300"
              >
                Image {item.id}
                <a href={item.download_url} target="_blank">
                  <ZoomIn size={25} className="bg-white/30 p-1 rounded-full" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Herosection;

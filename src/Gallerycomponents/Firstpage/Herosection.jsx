import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ZoomIn, ArrowRight, ArrowLeft } from "lucide-react";
import { useNavigate ,Route } from "react-router-dom";
import { ApiFactchedData } from "../../Api/Api";


const Herosection = () => {
  
  const [indx, setindx] = useState(1);
  const navigate = useNavigate();
  const [Render, setRender] = useState([]);
  const [load, setload] = useState("loading...");
  function prev() {
    if (indx > 1) {
      let vaa = indx - 1;
      setindx(vaa);
      run(vaa);
    }
  }
  //next btn
  function next() {
    setindx([]);
    let val = indx + 1;
    setindx(val);
    run(val);
  }
  
  // async function run(value) {
    const data = useContext(ApiFactchedData)
    console.log(data);
    
    // setRender(data);
    // setload([]);
  //   return data;
  // }

  async function run(value) {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${value}&limit=15`,
    );
    console.log(data);
    setRender(data)
    setload([])
    return data;
  }
  //run function end

  useEffect(() => {
    run(indx);
  }, []);

  return (
    <>
      <div className="w-full flex justify-between items-center text-3xl">
        {load}
      </div>
      <div
        className="
        fixed bottom-20 w-full z-10
        font-extrabold flex justify-center items-center  
        "
      >
        <div className="flex sm:w-1/3 w-1/2 justify-between p-2 text-black rounded-t-3xl bg-white/50 backdrop-blur-lg items-center ">
          <button onClick={prev} className=" grid place-items-center ">
            <ArrowLeft className="pointer-events-none" />
          </button>
          <span className="font-serif ">{indx}</span>
          <button onClick={next} className="grid place-items-center">
            <ArrowRight className="pointer-events-none" />
          </button>
        </div>
      </div>

      {/* Main_image_container */}
      <div className="Main_image_container grid grid-cols-2 sm:grid-cols-3 overflow-y-scroll  gap-3 p-2 items-center">
        {Render.map((item) => (
          <div
            key={item.id}
            style={{ backgroundImage: `url(${item.download_url})` }}
            className="flex items-end h-60 bg-cover rounded-2xl overflow-hidden sm:h-56 cursor-pointer shadow-black shadow-md hover:scale-95 transition-transform"
            onClick={() => {
              navigate('./Imagecloseup', {
                state: {
                  id: item.id,
                  page: indx,
                  Image: item.download_url,
                  item: item,
                },
              });
            }}
          >
            <div className="text-white inset-0 bg-linear-to-t p-2 font-serif from-black/80 to-transparent w-full ">
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
        <button onClick={()=>{
        navigate(+1)
      }}>next</button>
      </div>
    </>
  );
};

export default Herosection;

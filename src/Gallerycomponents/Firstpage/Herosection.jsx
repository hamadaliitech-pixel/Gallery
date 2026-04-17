import { useContext, useEffect, useState, useRef } from "react";
import { ZoomIn } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ApiFactchedData } from "../../Api/Api";
import gsap from "gsap";
import Trash from "./Trash";
const Herosection = () => {
  const navigate = useNavigate();
  const [Render, setRender] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const data = useContext(ApiFactchedData);

  const boxRef = useRef();
  // const AnimateImage = useRef()
    const dotsRef = useRef([]);
  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 400,
      duration: 0.1,
    });

    // gsap.from(boxRef.current,{
    //   x:300,
    //   duration: 2.1,
    // });

    // gsap.from(".animate",{
    // scale:0.5,
    // duration:2,
    // scrollTrigger:{
    //     trigger:'.animate',
    //     scroller:'body',
    //     markers:true,
    //     start:"top 30%",
    //     end:"top 60%",
    //     scrub:1,
    //     pin:true,
    // }

    // })

     gsap.to(dotsRef.current, {
      opacity: 0,
      y: -5,
      duration: 0.5,
      stagger: 0.2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

  }, []);

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
      <div
        ref={boxRef}
        className="w-full flex justify-between items-center text-3xl"
      >
        {isLoading && "loading..."}
      </div>

      <div className="Main_image_container grid grid-cols-2 sm:grid-cols-3 overflow-y-scroll gap-3 p-2 items-center">
        {Render.map((item) => (
          <div
            ref={boxRef}
            key={item.id}
            style={{ backgroundImage: `url(${item.download_url})` }}
            className=" animate flex items-end h-60 bg-cover rounded-2xl overflow-hidden sm:h-56 cursor-pointer shadow-black shadow-md hover:scale-95 transition-transform"
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

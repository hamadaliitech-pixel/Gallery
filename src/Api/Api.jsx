import React, { createContext, useContext, useState } from "react";
import axios from "axios";
export let ApiFactchedData = createContext();
import { ArrowRight, ArrowLeft } from "lucide-react";

const Api = (props) => {
  const [indx, setindx] = useState(1);
  //-------------Catching Api--------------------
  async function GettingData(props) {
    console.log(props);
    
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${props}&limit=15`,
    );
    return data;
  }
  const data = GettingData(indx);
  //--------------------------------
  // Previous btn click
  function prev() {
    if (indx > 1) {
      let vaa = indx - 1;
      setindx(vaa);
      GettingData(vaa)
    }
  }
  //next btn click
  function next() {
    let val = indx + 1;
    setindx(val);
    GettingData(val)
  }
  //--------------------------------

  return (
    <div>
      <ApiFactchedData.Provider value={data}>
        {/* -------------App.jsx rendering--------------- */}
        <div>{props.children}</div>
        {/* ---------------------------- */}

        {/* -------------Next/Previous buttons--------------- */}
        <div>
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
        </div>
        {/* ---------------------------- */}
      </ApiFactchedData.Provider>
    </div>

  );
};

export default Api;

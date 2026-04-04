import { createContext } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


export let ApiFactchedData = createContext();

const Api = (props) => {
  const count = useSelector((state) => state.counter.value);
  
  //-------------Catching Api--------------------
  async function GettingData(all) {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${all}&limit=15`,
    );
    return data;
  }

  const data = GettingData(count);
  
  //--------------------------------
  return (
    <>
      <div>
        <ApiFactchedData.Provider value={data}>
          <div>{props.children}</div>
        </ApiFactchedData.Provider>
      </div>
    </>
  );
};

export default Api;

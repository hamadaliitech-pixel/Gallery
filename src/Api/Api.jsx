import React, { createContext, useContext, useState } from "react";
import axios from "axios";
export let ApiFactchedData = createContext();

const Api = (props) => {
  const [Render, setRender] = useState()

  async function run() {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=1&limit=15`,
    );
    return data;
  }
  run();
  console.log(run());
  

  return (
    <div>
      <ApiFactchedData.Provider value={run()}>
            <div>{props.children}</div>
      </ApiFactchedData.Provider>
    </div>
  );
};

export default Api;

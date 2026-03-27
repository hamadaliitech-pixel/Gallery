import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Imagedetails = () => {
    
  const params = useParams();
  console.log(params);

  const nevigate = useNavigate();
  function run() {
    nevigate(-1);
  }

  return (
    <div>
      <h1>Image details</h1>
      <button onClick={run}>Back</button>
    </div>
  );
};

export default Imagedetails;

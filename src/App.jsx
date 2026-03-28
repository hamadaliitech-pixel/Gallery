import { Routes, Route } from "react-router-dom";
import Firstpage from "./Gallerycomponents/Firstpage/Firstpage.jsx";
import Imagecloseup from "./Gallerycomponents/Imagecloseup/Imagecloseup.jsx";
import Error from "./assets/Error.jsx";
import Imagedetails from "./Gallerycomponents/Imagecloseup/Imagedetails.jsx";
import Api, { ApiFactchedData } from "./Api/Api.jsx";
import { useContext } from "react";
const App = () => {
  
  return (
    <>
    <Api/>
      <Routes>
        <Route>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Imagecloseup" element={<Imagecloseup />} />
          <Route path="/Imagecloseup/:id" element={<Imagedetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

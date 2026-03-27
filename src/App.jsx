import { Routes, Route, useParams } from "react-router-dom";
import Firstpage from "./Gallerycomponents/Firstpage/Firstpage.jsx";
import Imagecloseup from "./Gallerycomponents/Imagecloseup/Imagecloseup.jsx";
import Error from "./assets/Error.jsx";
import Imagedetails from "./Gallerycomponents/Imagecloseup/Imagedetails.jsx";
const App = () => {
  
  return (
    <>
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

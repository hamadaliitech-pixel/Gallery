import { Routes, Route } from "react-router-dom";
import Firstpage from "./Gallerycomponents/Firstpage/Firstpage.jsx";
import Imagecloseup from "./Gallerycomponents/Imagecloseup/Imagecloseup.jsx";
import Error from "./assets/Error.jsx";
import Imagedetails from "./Gallerycomponents/Imagecloseup/Imagedetails.jsx";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/Store.jsx";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Imagecloseup/:id" element={<Imagedetails />} />
          <Route path="/Imagecloseup" element={<Imagecloseup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Provider>
    </>
  );
};

export default App;

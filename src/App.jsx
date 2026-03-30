import { Routes, Route } from "react-router-dom";
import Firstpage from "./Gallerycomponents/Firstpage/Firstpage.jsx";
import Imagecloseup from "./Gallerycomponents/Imagecloseup/Imagecloseup.jsx";
import Error from "./assets/Error.jsx";
import Imagedetails from "./Gallerycomponents/Imagecloseup/Imagedetails.jsx";
import Api, { ApiFactchedData } from "./Api/Api.jsx";
import { Provider } from "react-redux";
import { store } from "./ReduxStore/Store.jsx";

const App = () => {
  return (
    <>
      <Provider store={store}>
      <Routes>
        <Route>
          <Route path="/" element={<Firstpage />} />
          <Route path="/Imagecloseup" element={<Imagecloseup />} />
          <Route path="/Imagecloseup/:id" element={<Imagedetails />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
        <Api />
      </Provider>
    </>
  );
};

export default App;

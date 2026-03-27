import { Navigation, Search } from "lucide-react";
import { Routes, Route, Link } from "react-router-dom";
import Ran from "./Ran";
import profile from "../../assets/profile.jpg";
export const Navbar = () => {
  return (
    <div className="Section-1 h-fit">
      <div className="flex justify-between items-center h-1/2 p-4">
        <div className="Logo 1st-circle ">
          <img
            src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG9ncmFwaGVyfGVufDB8fDB8fHww"
            alt="photo"
            className="bg-cover rounded-full object-cover h-12 w-12 "
          />
        </div>

        <div className="Nav-center leading-tight block sm:hidden">
          <div className="upprtext leading-tight flex justify-center text-gray-300">
            Username
          </div>
          <div className="location flex items-center">
            <Navigation size={14} />
            <p className="text-md ml-1 font-sans font-bold">Manchester, </p>
          </div>
        </div>

        <div className="flex gap-3">
          <div className="Nav-center items-center hidden sm:block">
            <div className="upprtext flex justify-center text-gray-300">
              Username
            </div>
            <div className="location flex items-center">
              <Navigation size={14} />
              <p className="text-md ml-1 font-sans font-bold">New Zeland </p>
            </div>
          </div>

          <div className="2nd-circle">
            <img
              src="https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D"
              alt="photo"
              className="bg-cover rounded-full object-cover h-12 w-12 "
            />
          </div>
        </div>
      </div>
      {/* interval */}
      <div className="Section-2 flex justify-center px-3 w-full h-1/3 pb-2">
        <div className="searchbar w-screen sm:w-1/2 flex items-center px-3 rounded-full justify-start bg-gray-200">
          <Search size={28} />
          <input
            type="text"
            placeholder="Search through Gallery.."
            className="focus:outline-none border-0 sm:max-w-2xl w-full p-2 sm:px-2 text-lg"
          />
        </div>
      </div>
{/*       
      <button onClick={() => {
        // <Link to="/ran" element={<Ran />} />
        // <Routes>
        //   <Route path="/ran" element={<Ran />}/>
        // </Routes>
          console.log('clk'); 
      }}>click</button> */}
      
    </div>
  );
};

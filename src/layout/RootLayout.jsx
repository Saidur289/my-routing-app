import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const RootLayout = () => {
    return (
        <div>
           <Navbar></Navbar> 
          <div className="content">
          <Outlet></Outlet>
          </div>

        </div>
    );
};

export default RootLayout;
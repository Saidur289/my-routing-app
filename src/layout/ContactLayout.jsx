import { Outlet } from "react-router-dom";
import Contact from "../Pages/Contact";


const ContactLayout = () => {
    return (
        <div>
           <Contact></Contact> 
           <Outlet></Outlet>
        </div>
    );
};

export default ContactLayout;
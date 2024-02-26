
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navber from "../Navber/Navber";
import { Toaster } from "react-hot-toast";



const Root = () => {
    return (
        <div>
            <div> <Navber></Navber></div> 
            <Outlet></Outlet>
            <Toaster/>
            <div> <Footer></Footer> </div>
        </div>
    );
};

export default Root;
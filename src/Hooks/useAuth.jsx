import { useContext } from "react";
import { AuthContext } from "../Authintication/Login/AuthProvider";

const useAuth = () => {
    
const all = useContext(AuthContext)
return all;
   
};

export default useAuth;
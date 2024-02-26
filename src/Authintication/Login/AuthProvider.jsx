import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
export const AuthContext = createContext(null)
import app from "../../firebase.config";

import { getAuth } from "firebase/auth";
const auth = getAuth(app);


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})
  
   

// google login

const googleLogin = () =>{
    return signInWithPopup(auth,  googleProvider)
}

//Signup user
const createUser =(email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

// Signin user
const signIn = (email, password) => {
   return signInWithEmailAndPassword(auth, email, password);
}



useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } 
      });
},[])



const authintications = {
    googleLogin,
    createUser,
    signIn,
    user
}



 return (
    <AuthContext.Provider value={ authintications}>
        {children}
    </AuthContext.Provider>
 )
}

export default AuthProvider;
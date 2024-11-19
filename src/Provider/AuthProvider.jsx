import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);


  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut=()=>{
    return signOut(auth);
  }


  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,

  };

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
    })
    return ()=>{
      unSub();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

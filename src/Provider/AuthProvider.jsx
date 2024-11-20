import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser=(email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email,password);
  }

  const logOut=()=>{
    setLoading(true);
    return signOut(auth);
  }


  const authInfo = {
    user,
    setUser,
    createNewUser,
    logOut,
    loginUser,
    loading,

  };

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth, currentUser=>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>{
      unSub();
    }
  },[])

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

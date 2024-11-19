import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  console.log(user)


  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
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

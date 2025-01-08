import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "../contex";


export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userInfo = {user,loading,createUser};

  return (
  
    <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
  )
}

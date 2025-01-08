import { useContext } from "react"
import { AuthContext } from "../contex"


export default function useAuth() {
    const auth = useContext(AuthContext);
  return auth;
  
}

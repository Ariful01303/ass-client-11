import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInit from "../Hooks/firebase.init";
firebaseInit()
const useFirebase=()=>{
    const auth=getAuth();
    const [user,setUser]=useState({});
    const [loading, setLoading] = useState(true)
    const singInGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
        
       
       }
       
     useEffect(() => {
        const unSubscrived= onAuthStateChanged(auth, (user) => {
           if (user) {
             setUser(user);
             
           } else {
             
           }
           setLoading(false);
         });
         return ()=>unSubscrived;
       }, []);
   
   
   
   
       const logOut=()=>{
         setLoading(true);
         signOut(auth)
         .then(() => {
           setUser({});
         })
         .finally(() => setLoading(false))
     }
     return {
        user,
        singInGoogle,
        logOut,
        loading,
        
    }

}
export default useFirebase
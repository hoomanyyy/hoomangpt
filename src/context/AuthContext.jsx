import {
createContext,
useContext,
useState
} from "react";

import axios from "axios";


const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://hoomangpt-backend.onrender.com";



const api = axios.create({

baseURL:API_BASE,

headers:{
"Content-Type":"application/json"
}

});



const AuthContext=createContext(null);



export function AuthProvider({children}){


const [user,setUser]=useState(()=>{


try{

return JSON.parse(
localStorage.getItem("user")
);

}catch{

return null;

}


});




function saveUser(data){


localStorage.setItem(
"user",
JSON.stringify(data)
);


setUser(data);


}





async function login(email,password){


const res=await api.post(
"/api/login",
{
email,
password
}
);


saveUser(res.data);


return res.data;


}







async function signup(name,email,password){


const res=await api.post(
"/api/signup",
{
name,
email,
password
}
);


return res.data;


}





function logout(){


localStorage.removeItem("user");

setUser(null);


}





return (

<AuthContext.Provider

value={{

user,

setUser,

login,

signup,

logout

}}

>

{children}

</AuthContext.Provider>

);


}






export function useAuth(){

return useContext(AuthContext);

}
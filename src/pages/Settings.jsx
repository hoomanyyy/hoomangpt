import {
  useEffect,
  useState
} from "react";

import {
  useAuth
} from "../context/AuthContext";

import {
  changeEmail,
  changePassword
} from "../api";

import "./Settings.css";


export default function Settings(){


const {
  user,
  setUser
}=useAuth();



const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [message,setMessage]=useState("");




useEffect(()=>{

if(user){

setEmail(
user.email || ""
);

}

},[user]);





async function saveEmail(){


try{


const res =
await changeEmail(
user.id,
email
);



const updatedUser={

...user,

email:res.email

};



setUser(updatedUser);


localStorage.setItem(
"user",
JSON.stringify(updatedUser)
);



setMessage(
"Email updated successfully ✓"
);



}catch(error){


setMessage(
error.response?.data?.detail ||
"Email update failed"
);


}


}






async function savePassword(){


try{


await changePassword(

user.id,

password

);



setPassword("");



setMessage(
"Password changed successfully ✓"
);



}catch(error){


setMessage(
"Password change failed"
);


}


}






return (


<div className="settings-page">



<h1>
⚙ Settings
</h1>


<p className="settings-desc">
Manage your account settings
</p>






<div className="settings-card">


<h2>
Account Email
</h2>



<label>
Email
</label>



<input

value={email}

onChange={
e=>setEmail(e.target.value)
}

/>



<button
onClick={saveEmail}
className="settings-btn"
>

Change Email

</button>



</div>







<div className="settings-card">


<h2>
Security
</h2>



<label>
New Password
</label>



<input

type="password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

/>



<button
onClick={savePassword}
className="settings-btn"
>

Change Password

</button>



</div>








<div className="settings-card account">


<h2>
Current Account
</h2>


<p>
Logged in as:
</p>


<strong>
{user?.email}
</strong>


</div>







{

message &&

<div className="settings-message">

{message}

</div>


}



</div>


);

}
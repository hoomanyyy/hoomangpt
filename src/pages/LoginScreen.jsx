import {
useState
} from "react";

import {
Link,
useNavigate
}
from "react-router-dom";

import {
useAuth
}
from "../context/AuthContext";

import "./LoginScreen.css";



export default function Login(){


const {login}=useAuth();

const navigate=useNavigate();


const [email,setEmail]=useState("");

const [password,setPassword]=useState("");

const [error,setError]=useState("");

const [loading,setLoading]=useState(false);




async function submit(e){

e.preventDefault();

setError("");

setLoading(true);


try{


await login(
email,
password
);


navigate("/dashboard");


}catch(err){


setError(
err.message
);


}
finally{

setLoading(false);

}


}



return (

<div className="auth">


<section className="auth-left">


<div className="brand">


<div className="logo">

NF

</div>


<div>

<h1>
Note<span>Finder</span>
</h1>

<p>
AI Document Workspace
</p>

</div>


</div>




<h2>
Welcome Back 👋
</h2>


<p>

Manage your PDFs with powerful AI.
Summarize, search and chat with your documents.

</p>



<ul>

<li>✨ AI PDF Summary</li>

<li>🤖 Smart Document Chat</li>

<li>⚡ Fast Processing</li>

<li>🔒 Secure Workspace</li>

</ul>


</section>







<section className="auth-card">


<h2>
Login
</h2>


<p className="subtitle">
Enter your account details
</p>




{
error &&

<div className="auth-error">

{error}

</div>

}





<form onSubmit={submit}>


<div className="field">

<label>
Email
</label>


<input

type="email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

placeholder="email@example.com"

/>

</div>





<div className="field">

<label>
Password
</label>


<input

type="password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

placeholder="********"

/>

</div>






<button

className="auth-submit btn-primary"

disabled={loading}

>


{

loading?
"Loading..."
:
"Login"

}


</button>



</form>






<div className="divider">

<span>
OR
</span>

</div>





<div className="auth-switch">

Don't have account?


<Link to="/signup">

Create account

</Link>


</div>




</section>


</div>


)

}
import {
useEffect,
useRef,
useState
}
from "react";

import {
NavLink,
useNavigate
}
from "react-router-dom";

import {
useAuth
}
from "../context/AuthContext";

import {
checkHealth,
summarizePdf,
askQuestion,
getUsage
}
from "../api";

import "./Dashboard.css";



export default function Dashboard(){


const {user,logout}=useAuth();

const navigate=useNavigate();

const fileRef=useRef();



const [online,setOnline]=useState(false);

const [model,setModel]=useState(
"Connecting..."
);



const [usage,setUsage]=useState({

plan:"FREE",
used:0,
limit:2,
remaining:2

});


console.log("VERSION NEW 123");

const [file,setFile]=useState(null);

const [loading,setLoading]=useState(false);

const [summary,setSummary]=useState("");

const [context,setContext]=useState("");

const [question,setQuestion]=useState("");

const [chat,setChat]=useState([]);



useEffect(()=>{


checkHealth()

.then(res=>{

setOnline(true);

setModel(res.model);

})
.catch(()=>{

setOnline(false);

});


loadUsage();


},[]);





async function loadUsage(){


try{

const data=
await getUsage(user?.id);


setUsage(data);


}catch{

}



}




async function generate(){


if(!file)
return;



setLoading(true);


try{


const data=
await summarizePdf(
file,
"medium",
user.id
);



setSummary(
data.summary
);



setContext(
data.context
);



loadUsage();



}

finally{

setLoading(false);

}


}




async function sendQuestion(){


if(!question)
return;



setChat(prev=>[

...prev,

{
role:"user",
text:question
}

]);



const answer=
await askQuestion(
question,
context
);



setChat(prev=>[

...prev,

{
role:"ai",
text:answer
}

]);



setQuestion("");


}




function logoutUser(){


logout();

navigate("/login");


}



return (

<div className="dash">



<aside className="sidebar">


<div className="brand">


<div className="logo">
NF
</div>


<div>

<h2>
NoteFinder
</h2>

<span>
AI Workspace
</span>


</div>


</div>





<nav>


<NavLink to="/dashboard">

🏠 Dashboard

</NavLink>


<NavLink to="/documents">

📄 Documents

</NavLink>


<NavLink to="/billing">

💳 Billing

</NavLink>


<NavLink to="/settings">

⚙ Settings

</NavLink>


</nav>





<div className="profile">


<div className="avatar">

👤

</div>


<p>

{user?.email}

</p>



<button
onClick={logoutUser}
>

Logout

</button>


</div>


</aside>




<div className="mobile-nav">

<NavLink to="/dashboard">
🏠
<span>Home</span>
</NavLink>


<NavLink to="/documents">
📄
<span>Docs</span>
</NavLink>


<NavLink to="/billing">
💳
<span>Billing</span>
</NavLink>


<NavLink to="/settings">
⚙
<span>Settings</span>
</NavLink>


</div>

{/* MOBILE NAV */}

<div className="mobile-nav">

<NavLink to="/dashboard">
🏠
<span>Home</span>
</NavLink>


<NavLink to="/documents">
📄
<span>Docs</span>
</NavLink>


<NavLink to="/billing">
💳
<span>Billing</span>
</NavLink>


<NavLink to="/settings">
⚙
<span>Settings</span>
</NavLink>


</div>

<main className="main">


<header className="header">


<div>

<h1>
Good Morning 👋
</h1>


<p>
Manage your AI documents
</p>


</div>




<div className="status">


<span
className={
online?
"online"
:
"offline"
}
>

●

</span>


{model}


</div>


</header>







<section className="stats">



<div className="stat-card">


<h4>
Current Plan
</h4>


<h2>
{usage.plan}
</h2>


<button
className="primary"
onClick={()=>navigate("/billing")}
>
Upgrade
</button>


</div>




<div className="stat-card">


<h4>
Daily Usage
</h4>


<h2>
{usage.used}/{usage.limit}
</h2>


<div className="bar">


<span

style={{
width:
`${usage.used/usage.limit*100}%`
}}

/>


</div>


</div>




<div className="stat-card">


<h4>
Remaining
</h4>


<h2>
{usage.remaining}
</h2>


<p>
Requests left
</p>


</div>



</section>








<section className="grid">



<div className="panel">


<h2>
Upload PDF
</h2>



<div

className="upload-box"

onClick={()=>
fileRef.current.click()
}

>


<input

ref={fileRef}

hidden

type="file"

accept=".pdf"

onChange={
e=>
setFile(
e.target.files[0]
)
}

/>



{

file ?

<>

📄

<p>
{file.name}
</p>

</>

:

<>

⬆️

<p>
Drop your PDF here
</p>

</>

}



</div>



<button

className="primary"

onClick={generate}

disabled={loading}

>


{

loading?
"Processing..."
:
"Generate Summary"

}



</button>


</div>








<div className="panel">


<h2>
Recent Activity
</h2>


<div className="activity">
📄 PDF Uploaded
</div>


<div className="activity">
🤖 AI Summary Created
</div>


<div className="activity">
⭐ Usage Checked
</div>


</div>



</section>










{

summary &&

<section className="panel result">


<h2>
📚 Summary
</h2>


<p>
{summary}
</p>


</section>


}









{

context &&

<section className="panel chat">


<h2>
🤖 AI Assistant
</h2>



<div className="messages">


{

chat.map(
(item,index)=>(


<div

key={index}

className={
item.role
}

>

{item.text}

</div>


)

)


}


</div>





<div className="chat-box">


<input

value={question}

onChange={
e=>
setQuestion(e.target.value)
}

placeholder="Ask about document..."

/>


<button
onClick={sendQuestion}
>

Send

</button>


</div>


</section>


}



</main>



</div>

)

}
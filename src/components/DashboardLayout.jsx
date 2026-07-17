import {
Outlet,
NavLink,
useNavigate
} from "react-router-dom";


import {
useAuth
} from "../context/AuthContext";


import "../css/Dashboard.css";



export default function DashboardLayout(){


const {user,logout}=useAuth();

const navigate=useNavigate();



function exit(){

logout();

navigate("/login");

}



return (

<div className="layout">


<aside className="sidebar">


<div className="brand">


<div className="brand-logo">
NF
</div>


<div>

<h2>
Note<span>Finder</span>
</h2>

<p>
AI Workspace
</p>

</div>


</div>





<nav>


<NavLink to="/">
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





<div className="user-box">


<div className="avatar">
👤
</div>


<div>

<p>
{user?.email}
</p>


<small>
Free Member
</small>

</div>



<button
onClick={exit}
>

Logout

</button>


</div>



</aside>



<main className="content">


<Outlet/>


</main>



</div>

)

}
import {
NavLink
} from "react-router-dom";


import "./Sidebar.css";


export default function Sidebar(){


return (

<aside className="sidebar">


<div className="logo-box">

NF

</div>


<h2>
NoteFinder
</h2>



<nav>


<NavLink to="/dashboard">
🏠 Dashboard
</NavLink>


<NavLink to="/documents">
📄 Documents
</NavLink>


<NavLink to="/assistant">
🤖 AI Assistant
</NavLink>


<NavLink to="/billing">
💳 Billing
</NavLink>


<NavLink to="/settings">
⚙ Settings
</NavLink>



</nav>


</aside>

)

}
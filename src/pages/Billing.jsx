import {
useEffect,
useState
} from "react";

import {
useAuth
} from "../context/AuthContext";

import {
getPlan,
getUsage,
createPayment
} from "../api";

import "./Billing.css";


export default function Billing(){

const {user}=useAuth();


const [plan,setPlan]=useState("FREE");


const [usage,setUsage]=useState({

used:0,

limit:2,

remaining:2

});



useEffect(()=>{


load();


const timer=setInterval(()=>{

load();

},10000);



return ()=>clearInterval(timer);



},[]);





async function load(){


try{


const p=await getPlan(user.id);

setPlan(p);



const u=await getUsage(user.id);

setUsage(u);



}catch(err){

console.log(err);

}


}




async function upgrade(){


try{


const payment =
await createPayment(user.id);



if(payment.invoice_url){


window.open(

payment.invoice_url,

"_blank"

);


}else{


alert(
"Could not create payment"
);


}



}catch(err){


console.log(err);


alert(
"Payment error"
);


}



}





return (

<div className="billing-page">


<h1>
💳 Billing
</h1>


<p>
Manage your NoteFinder subscription
</p>



<div className="billing-grid">



<div className="billing-card">


<h2>
Current Plan
</h2>


<div className="plan">

{plan}

</div>


<p>
Daily Usage
</p>


<h3>

{usage.used}
/
{usage.limit}

</h3>



<div className="progress">

<span

style={{

width:
`${Math.min(
(usage.used/usage.limit)*100,
100
)}%`

}}

/>

</div>


<p>
{usage.remaining} remaining
</p>


</div>





<div className="billing-card premium">


<h2>
🚀 PRO PLAN
</h2>


<ul>

<li>
50 AI summaries daily
</li>

<li>
Large PDF support
</li>

<li>
Priority processing
</li>

<li>
Future AI features
</li>


</ul>



<button onClick={upgrade}>

Upgrade $4

</button>



</div>


</div>


</div>

);


}
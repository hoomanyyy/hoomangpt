import Sidebar from "../components/Sidebar";
import "./Assistant.css";


export default function Assistant(){


return (

<div className="layout">


<Sidebar/>


<main className="page">


<h1>
🤖 AI Assistant
</h1>


<p className="desc">
Ask questions about your documents
</p>




<div className="chat-container">


<div className="message ai">

Hello 👋
Upload a document and ask me anything.

</div>



<div className="chat-bottom">


<input
placeholder="Ask something..."
/>


<button>
Send
</button>


</div>



</div>


</main>


</div>


)

}
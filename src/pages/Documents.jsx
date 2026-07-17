import "./Documents.css";


export default function Documents(){


const docs=[

{
name:"Research.pdf",
size:"2.4 MB",
date:"Today"
},

{
name:"Book.pdf",
size:"5 MB",
date:"Yesterday"
},

{
name:"Report.pdf",
size:"1.8 MB",
date:"2 days ago"
}

];



return (

<div className="page">


<div className="page-title">

<h1>
📄 Documents
</h1>

<p>
Manage your uploaded AI documents
</p>

</div>




<div className="document-grid">


{

docs.map((d,i)=>(


<div className="document-card" key={i}>


<div className="file-icon">
📑
</div>


<div>

<h3>
{d.name}
</h3>


<p>
{d.size}
</p>


<span>
{d.date}
</span>


</div>


<button>
Open
</button>



</div>


))

}



</div>


</div>


)

}
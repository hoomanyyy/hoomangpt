import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./HomeScreen.css";


const features = [

  {
    title: "AI Summarization",
    text: "Convert your PDF notes into clean and structured summaries.",
    icon: "📄",
  },

  {
    title: "Ask Your Notes",
    text: "After summarizing, ask any question about your document.",
    icon: "💬",
  },

  {
    title: "Local Execution",
    text: "Your data stays on your computer and does not leave your system.",
    icon: "🔒",
  },

  {
    title: "High Speed",
    text: "Fast processing for large files without losing important content.",
    icon: "⚡",
  },

];



export default function HomeScreen(){

  const { user } = useAuth();

  const navigate = useNavigate();



  return (

    <div className="home" dir="ltr">


      {/* Background */}

      <div className="bg-circle one" />

      <div className="bg-circle two" />




      {/* Navbar */}

      <header className="navbar">



        <div className="home-logo">


          <div className="home-logo-icon">

            📚

          </div>



          <div className="home-logo-text">

            <h2>
              Note<span>Finder</span>
            </h2>


            <span>
              Study Summarizer AI
            </span>


          </div>



        </div>





        <nav className="nav-buttons">



          {
            user ?


            (

              <button

                className="btn primary"

                onClick={() =>
                  navigate("/dashboard")
                }

              >

                Dashboard

              </button>

            )


            :


            (

              <>


                <Link

                  className="btn ghost"

                  to="/login"

                >

                  Login

                </Link>





                <Link

                  className="btn primary"

                  to="/signup"

                >

                  Sign Up

                </Link>



              </>

            )

          }



        </nav>



      </header>







      {/* Hero */}


      <main>


        <section className="hero">



          <div className="badge">

            ✨ AI Note Summarization

          </div>






          <h1>


            Study smarter with AI


            <span>

              Summarize your notes in seconds

            </span>



          </h1>







          <p>


            Upload your PDF notes and let artificial intelligence

            extract key points, create structured summaries,

            and answer questions directly from your documents.



          </p>







          <div className="hero-buttons">





            <Link

              className="btn primary large"

              to={
                user
                ? "/dashboard"
                : "/signup"
              }

            >

              Get Started Free

            </Link>







            {

              !user &&


              <Link

                className="btn ghost large"

                to="/login"

              >

                Login

              </Link>


            }




          </div>






        </section>







        {/* Features */}



        <section className="features">



          {

            features.map((item)=>(



              <div

                className="card"

                key={item.title}

              >



                <div className="icon">

                  {item.icon}

                </div>





                <h3>

                  {item.title}

                </h3>





                <p>

                  {item.text}

                </p>





              </div>



            ))

          }



        </section>








        {/* Stats */}



        <section className="stats">





          <div className="stat">


            <h2>

              +1000

            </h2>


            <span>

              Pages Processed

            </span>


          </div>






          <div className="stat">


            <h2>

              98%

            </h2>


            <span>

              Summary Accuracy

            </span>


          </div>







          <div className="stat">


            <h2>

              AI

            </h2>


            <span>

              Smart Answers

            </span>


          </div>






        </section>






      </main>







      <footer>


        Built with ❤️ React + FastAPI + Transformers


      </footer>





    </div>


  );


}
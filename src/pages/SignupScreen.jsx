import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./SignupScreen.css";

export default function SignupScreen() {


  const { signup } = useAuth();

  const navigate = useNavigate();



  const [name,setName] = useState("");

  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [confirm,setConfirm] = useState("");

  const [error,setError] = useState("");






  const onSubmit = async (e)=>{


    e.preventDefault();




    if(name.trim().length < 2)

      return setError(
        "Please enter your full name."
      );





    if(!email.includes("@"))

      return setError(
        "Please enter a valid email."
      );





    if(password.length < 6)

      return setError(
        "Password must be at least 6 characters."
      );





    if(password !== confirm)

      return setError(
        "Passwords do not match."
      );








    try{


      await signup(

        name.trim(),

        email,

        password

      );



      navigate("/login");



    }


    catch(error){


      setError(
        error.message
      );


    }



  };







  return (



    <div className="auth" dir="ltr">





      <div className="auth-card">





        <Link

          to="/"

          className="brand auth-brand"

        >



          <div className="logo">


            <svg

              viewBox="0 0 24 24"

              fill="none"

              stroke="#ffca4b"

              strokeWidth="1.8"

              strokeLinecap="round"

              strokeLinejoin="round"

            >


              <path d="M4 4.5A1.5 1.5 0 0 1 5.5 3H15l5 5v11.5A1.5 1.5 0 0 1 18.5 21h-13A1.5 1.5 0 0 1 4 19.5Z" />

              <path d="M14 3v5h5" />

              <path d="M8 12h7" />

              <path d="M8 16h5" />


            </svg>


          </div>





          <div>


            <h1>

              Note<span>Finder</span>

            </h1>



          </div>





        </Link>







        <h2 className="auth-title">

          Create Account

        </h2>





        <p className="auth-sub">

          Start in just a few seconds.

        </p>








        <form

          onSubmit={onSubmit}

          noValidate

        >





          <div className="field">


            <label>

              Name

            </label>



            <input


              type="text"


              value={name}



              onChange={(e)=>{


                setName(e.target.value);

                setError("");

              }}



              placeholder="Your name"


            />



          </div>









          <div className="field">



            <label>

              Email

            </label>




            <input


              type="email"


              value={email}



              onChange={(e)=>{


                setEmail(e.target.value);

                setError("");

              }}



              placeholder="you@example.com"


              autoComplete="email"


              dir="ltr"


            />



          </div>









          <div className="field">


            <label>

              Password

            </label>




            <input


              type="password"


              value={password}



              onChange={(e)=>{


                setPassword(e.target.value);

                setError("");

              }}




              placeholder="Minimum 6 characters"


              autoComplete="new-password"


              dir="ltr"


            />



          </div>









          <div className="field">


            <label>

              Confirm Password

            </label>




            <input


              type="password"


              value={confirm}



              onChange={(e)=>{


                setConfirm(e.target.value);

                setError("");

              }}




              placeholder="••••••••"


              autoComplete="new-password"


              dir="ltr"


            />



          </div>









          {


            error &&

            <div className="auth-error">

              {error}

            </div>


          }









          <button

            type="submit"

            className="btn btn-primary auth-submit"

          >

            Create Account

          </button>







        </form>









        <p className="auth-switch">


          Already have an account?


          <Link to="/login">

            Login

          </Link>



        </p>







      </div>





    </div>



  );


}
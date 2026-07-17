import axios from "axios";


const API_BASE =
  import.meta.env.VITE_API_URL ||
  "https://hoomangpt-backend.onrender.com";


const api = axios.create({

  baseURL: API_BASE,

  headers:{
    Accept:"application/json"
  }

});



// health

export async function checkHealth(){

  try{

    const res = await api.get("/api/health");

    return res.data;

  }catch(error){

    throw new Error(
      "Server offline"
    );

  }

}


// login

export async function login(email,password){

  const res = await api.post(
    "/api/login",
    {
      email,
      password
    }
  );

  return res.data;

}




// signup

export async function signup(
  name,
  email,
  password
){

  const res = await api.post(
    "/api/signup",
    {
      name,
      email,
      password
    }
  );


  return res.data;

}


export async function changeEmail(user_id,email){

    const res = await api.post(
        "/api/change-email",
        {
            user_id,
            email
        }
    );

    return res.data;

}



export async function changePassword(user_id,password){

    const res = await api.post(
        "/api/change-password",
        {
            user_id,
            password
        }
    );

    return res.data;

}


// summary

export async function summarizePdf(file,length,user_id){

    const formData = new FormData();

    formData.append(
        "file",
        file
    );

    formData.append(
        "user_id",
        user_id
    );


    try{

        const res = await api.post(
            "/api/generate_response",
            formData,
            {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
        );


        return res.data;


    }catch(error){

        throw new Error(
            error.response?.data?.detail ||
            "Server error"
        );

    }

}




// ask

export async function askQuestion(
 question,
 context
){

 const res =
 await api.post(
  "/api/ask",
  {
    question,
    context
  }
 );


 return res.data.answer;

}





// plan

export async function getPlan(id){


 const res =
 await api.post(
  "/api/getPlan",
  {
    id
  }
 );


 return res.data.plan;

}





// usage

export async function getUsage(id){


 const res =
 await api.post(
  "/api/getUsage",
  {
    id
  }
 );


 return res.data;

}

export async function createPayment(user_id){

    const res = await api.post(
        "/api/create-payment",
        {
            user_id
        }
    );

    return res.data;

}

export default api;
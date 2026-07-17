import {
BrowserRouter,
Routes,
Route
}
from "react-router-dom";


import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";
import SignupScreen from "./pages/SignupScreen";
import Dashboard from "./pages/Dashboard";
import Documents from "./pages/Documents";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";


export default function App(){


return (

<BrowserRouter>

<Routes>


<Route path="/" element={<HomeScreen/>}/>

<Route path="/login" element={<LoginScreen/>}/>

<Route path="/signup" element={<SignupScreen/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/documents" element={<Documents/>}/>

<Route path="/billing" element={<Billing/>}/>

<Route path="/settings" element={<Settings/>}/>


</Routes>

</BrowserRouter>

)

}
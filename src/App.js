import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Galllery/Gallery";
// import Alumni from "./pages/Alumni/Alumni";
import Home from "./pages/Home/Home";
import Eventpics from "./pages/Galllery/Eventpics";
<<<<<<< HEAD
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
=======
import Login from "./components/Login/Loginlanding";
import Otplogin from "./components/Login/otplogin";
import ForgetPassword from "./components/Login/forgetpassword";
import PasswordLogin from "./components/Login/passwordlogin";
>>>>>>> 931f7b7ad279f2ba2e2d57acb7ab9416b08cbbdd

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        {/* <Route path="/alumni/:year?" element={<Alumni/>}></Route> */}
        <Route path="/gallery/:year/:event" element={<Eventpics />}></Route>
        <Route path="/Login" element={<Login />}></Route>
<<<<<<< HEAD
        <Route path="/Register" element={<Register />}></Route>
=======
        <Route path="/Loginotp" element={<Otplogin />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/loginpassword" element={<PasswordLogin />}></Route>
>>>>>>> 931f7b7ad279f2ba2e2d57acb7ab9416b08cbbdd
      </Routes>
    </BrowserRouter>
  );
}

export default App;

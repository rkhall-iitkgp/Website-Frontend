import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Galllery/Gallery";
// import Alumni from "./pages/Alumni/Alumni";
import Home from "./pages/Home/Home";
import Eventpics from "./pages/Galllery/Eventpics";
import Login from "./components/Login/Loginlanding";
import Otplogin from "./components/Login/otplogin";
import ForgetPassword from "./components/Login/forgetpassword";
import PasswordLogin from "./components/Login/passwordlogin";
import Register from "./components/Register/Register";
import ComingSoon from "./pages/Galllery/comingsoon";

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
        <Route path="/Loginotp" element={<Otplogin />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/loginpassword" element={<PasswordLogin />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/dashboard" element={<DashboardUI/>}></Route>
        <Route path="/coming-soon" element={<ComingSoon />}></Route>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
        <Route path="/profile" element={<ProfileCard />}></Route>
        <Route path="/writeabout" element={<WriteAbout />}></Route>
        <Route path="/yourinfo" element={<YourInfo />}></Route>
        <Route path="/skill" element={<Skill />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

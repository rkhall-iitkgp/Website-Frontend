import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Galllery/Gallery";
import Alumni from "./pages/Alumni/Alumni";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/alumni" element={<Alumni/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

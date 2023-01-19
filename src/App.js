import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./containers/Header/headerContainer";
import GalleryHome from "./components/Home_Gallery/galleryHome";
import AboutUs from "./components/Home_About/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Galllery/Gallery";
import Alumni from "./pages/Alumni/Alumni";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/alumni" element={<Alumni />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

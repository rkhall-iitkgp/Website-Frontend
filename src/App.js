import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./pages/Galllery/Gallery";
import Home from "./pages/Home/Home";

function App() {
  return (
    // <div>
    //   <Home />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

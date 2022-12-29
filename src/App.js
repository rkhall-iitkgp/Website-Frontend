import "./App.css";
<<<<<<< Updated upstream
import Gallery from "./components/Home_Gallery/galleryHome.js";

function App() {
  return (
    <div className="App">
      <Gallery></Gallery>
=======
import Navbar from "./components/Navbar/Navbar";
import Header from "./containers/Header/headerContainer";
import GalleryHome from "./components/Home_Gallery/galleryHome";
import AboutUs from "./components/Home_About/About";
import Testimonals from "./components/Testimonals/Testimonals";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <GalleryHome />
      <AboutUs />
      <Testimonals />
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

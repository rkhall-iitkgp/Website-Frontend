import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Header from './containers/Header/headerContainer';
import GalleryHome from './components/Home_Gallery/galleryHome';
import AboutUs from "./components/Home_About/About";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <GalleryHome />
      <AboutUs />
    </div>
  );
}

export default App;

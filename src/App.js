import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Header from './containers/Header/headerContainer';
import GalleryHome from './components/Home_Gallery/galleryHome';
import AboutUs from "./components/Home_About/About";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <GalleryHome />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;

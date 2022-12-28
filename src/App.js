import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './containers/Header/headerContainer';
import GalleryHome from './components/Home_Gallery/galleryHome';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <GalleryHome />
    </div>
  );
}

export default App;

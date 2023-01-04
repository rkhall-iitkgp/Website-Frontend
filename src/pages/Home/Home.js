import Navbar from "../../components/Navbar/Navbar";
import Header from "../../containers/Header/headerContainer";
import GalleryHome from "../../components/Home_Gallery/galleryHome";
import AboutUs from "../../components/Home_About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer"

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <GalleryHome />
            <AboutUs />
            <Testimonials />
            <Footer />
         </>
    );
}

export default Home;
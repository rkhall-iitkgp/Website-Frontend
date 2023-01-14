import Navbar from "../../components/Navbar/Navbar";
import Header from "../../containers/Header/headerContainer";
import GalleryHome from "../../components/Home_Gallery/galleryHome";
import AboutUs from "../../components/Home_About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import ProfileList from "../../components/Office_Bearers/ProfileList";
import Footer from "../../components/Footer/Footer"
import './css/Home.css'

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <GalleryHome />
            <AboutUs />
            <Testimonials />
            {/* <div className='profile-container'>
                <ProfileList />
            </div> */}
            <Footer /> 
        </>
    );
}

export default Home;

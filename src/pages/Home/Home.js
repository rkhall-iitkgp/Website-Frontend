import Navbar from "../../components/Navbar/Navbar";
import Header from "../../containers/Header/headerContainer";
import GalleryHome from "../../components/Home_Gallery/galleryHome";
import AboutUs from "../../components/Home_About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import HeadProfileList from "../../components/Office_Bearers/Heads/ProfileListHeads";
import GsecProfileList from "../../components/Office_Bearers/Gsec/ProfileListGsec";
import Footer from "../../components/Footer/Footer"
import './css/Home.css'
import headprofiles from '../../components/Office_Bearers/Heads/profiles.json';
import gsecprofiles from '../../components/Office_Bearers/Gsec/profiles.json'

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <GalleryHome />
            <AboutUs />
            <Testimonials />
            <div className='profile-container'>
                <HeadProfileList profiles={headprofiles} />
                <GsecProfileList profiles={gsecprofiles} />
            </div>
            <Footer />
         </>
    );
}

export default Home;

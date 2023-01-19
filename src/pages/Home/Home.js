import Navbar from "../../components/Navbar/Navbar";
import Header from "../../containers/Header/headerContainer";
import GalleryHome from "../../components/Home_Gallery/galleryHome";
import AboutUs from "../../components/Home_About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import WardenProfileList from "../../components/Office_Bearers/Wardens/ProfileListWarden";
import HeadProfileList from "../../components/Office_Bearers/Heads/ProfileListHeads";
import GsecProfileList from "../../components/Office_Bearers/Gsec/ProfileListGsec";
import Footer from "../../components/Footer/Footer"
import './css/Home.css'
import wardenprofiles from '../../components/Office_Bearers/Wardens/profiles.json';
import headprofiles from '../../components/Office_Bearers/Heads/profiles.json';
import gsecprofiles from '../../components/Office_Bearers/Gsec/profiles.json'

export function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <GalleryHome />
            <AboutUs />
            <Testimonials />
            <div className='profile-container'>
                <WardenProfileList profiles={wardenprofiles} />
                <HeadProfileList profiles={headprofiles} />
                <GsecProfileList profiles={gsecprofiles} />
            </div>
            <Footer />
        </>
    );
}

export default Home;


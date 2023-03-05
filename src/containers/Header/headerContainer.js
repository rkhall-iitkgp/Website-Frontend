import "./css/headerContainer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// import Button from "../../components/Button/Button";
const Header = () => {
    return (
        <div class="container">
            <div class="header">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper carousel"
                >
                    <SwiperSlide className="slide slide1">
                        <div class="hallName">RADHAKRISHNAN HALL OF RESIDENCE</div>
                        <div class="hallDescription">
                            Radhakrishnan Hall of Residence, or the R.K. Hall, is named after
                            the renowned scholar and statesman, Dr. Sarvapalli Radhakrishnan,
                            who served as the honored President of India from 1962 to 1967.
                        </div>
                        <div class="headerbutton">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence"
                            >
                                <button class="headerReadMore">Read More &gt;</button>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide slide2">
                        <div class="hallName">DEFENDING CHAMPIONS OF INTER HALL GC</div>
                        <div className="hallDescription">
                            Our hall's unwavering dedication and hard work have led us to win the Inter Hall General Championship of Sports, along with a Bronze Medal in Socult and a Silver Medal in Tech.
                        </div>
                        <div class="headerbutton">
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence"
                            >
                                <button class="headerReadMore">Read More &gt;</button>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default Header;

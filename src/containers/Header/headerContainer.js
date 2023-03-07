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
                    loop = {true}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper carousel"
                >
                    <SwiperSlide className="slide slide1">
                        <div class="hallName">RADHAKRISHNAN HALL OF RESIDENCE</div>
                        <div class="hallDescription">
                        Radhakrishnan Hall of Residence is named after the distinguished scholar and statesman, Dr. Sarvepalli Radhakrishnan, who served as the President of India from 1962-1967.
                        RK was established in 1957 and Its rich history boasts of a total of 45 General Championships, a testament to the hall's tradition of teamwork, discipline, and excellence.

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
                        RK has established itself as a force to be reckoned with when it comes to the General Championships. Our hall's unwavering dedication and hard work have led us to victories in the Recent Inter hall gymkhana championship, which includes Gold in Sports, Silver in Tech and Bronze in SoCult.

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

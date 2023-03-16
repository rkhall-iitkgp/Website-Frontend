import styles from "./headerContainer.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
// import Button from "../../components/Button/Button";
const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header} id="home">
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
                    className={`${styles.mySwiper} ${styles.carousel}`}
                    variant="primary"
                >
                    <SwiperSlide className={`${styles.slide} ${styles.slide1}`}>
                        <div className={styles.hallName}>RADHAKRISHNAN HALL OF RESIDENCE</div>
                        <div className={styles.hallDescription}>
                        Radhakrishnan Hall of Residence is named after the distinguished scholar and statesman, Dr. Sarvepalli Radhakrishnan, who served as the President of India from 1962-1967.
                        RK was established in 1957 and Its rich history boasts of a total of 45 General Championships, a testament to the hall's tradition of teamwork, discipline, and excellence.

                        </div>
                        <div className={styles.headerbutton}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence"
                            >
                                <button className={styles.headerReadMore}>Read More &gt;</button>
                            </a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.slide} ${styles.slide2}`}>
                        <div className={styles.hallName}>DEFENDING CHAMPIONS OF INTER HALL GC</div>
                        <div className={styles.hallDescription}>
                        RK has established itself as a force to be reckoned with when it comes to the General Championships. Our hall's unwavering dedication and hard work have led us to victories in the Recent Inter hall gymkhana championship, which includes Gold in Sports, Silver in Tech and Bronze in SoCult.

                        </div>
                        <div className={styles.headerbutton}>
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence"
                            >
                                <button className={styles.headerReadMore}>Read More &gt;</button>
                            </a>
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default Header;

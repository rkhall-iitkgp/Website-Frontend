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
          </SwiperSlide>
          <SwiperSlide className="slide slide2">
            <div className="hallDescription">
              A mountain is an elevated portion of the Earth's crust, generally
              with steep sides that show significant exposed bedrock. Although
              definitions vary, a mountain may differ from a plateau in having a
              limited summit area, and is usually higher than a hill, typically
              rising at least 300 metres above the surrounding land.
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide slide3">
            <div className="hallDescription">
              Long-exposure, time-exposure, or slow-shutter photography involves
              using a long-duration shutter speed to sharply capture the
              stationary elements of images while blurring, smearing, or
              obscuring the moving elements. Long-exposure photography captures
              one element that conventional photography does not: an extended
              period of time.
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide slide4">
            <div className="hallDescription">
              A cherry blossom, also known as Japanese cherry or sakura, is a
              flower of many trees of genus Prunus or Prunus subg. Cerasus. They
              are common species in East Asia, including China, Korea and
              especially in Japan. They generally refer to ornamental cherry
              trees, not to be confused with cherry trees that produce fruit for
              eating.
            </div>
          </SwiperSlide>
        </Swiper>

        <div class="headerbutton">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wiki.metakgp.org/w/Radha_Krishnan_Hall_of_Residence"
          >
            <button class="headerReadMore">Read More &gt;</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

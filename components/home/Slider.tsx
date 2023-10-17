import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import { useEffect } from "react";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const Slider: React.FC = () => {


  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <div className="auto-container slider-text">
          <div className="container">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="slider_content pd_top_180 pd_bottom_200">
                <p className="discours">
                  Tous les pays, quel que soit leur niveau de revenus, ont dès{" "}
                  <br />
                  à présent l’opportunité de construire une croissance
                  économique <br />
                  durable tout en réduisant les immenses risques liés au
                  changement climatique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/sliders/img-banner-resize.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="auto-container slider-text">
          <div className="container">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="slider_content pd_top_180 pd_bottom_200">
                <p className="discours">
                  Tous les pays, quel que soit leur niveau de revenus, ont dès{" "}
                  <br />
                  à présent l’opportunité de construire une croissance
                  économique <br />
                  durable tout en réduisant les immenses risques liés au
                  changement climatique.
                </p>
              </div>
            </div>
          </div>
        </div>

        <img src="/images/sliders/slider-1-1.jpg" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <div className="auto-container slider-text">
          <div className="container">
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
              <div className="slider_content pd_top_180 pd_bottom_200">
                <p className="discours">
                  Tous les pays, quel que soit leur niveau de revenus, ont dès{" "}
                  <br />
                  à présent l’opportunité de construire une croissance
                  économique <br />
                  durable tout en réduisant les immenses risques liés au
                  changement climatique.
                </p>
              </div>
            </div>
          </div>
        </div>
        <img src="/images/sliders/slider-1-2.jpg" alt="Slide 2" />
      </SwiperSlide>

    </Swiper>
  );
};

export default Slider;

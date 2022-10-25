import React from "react";
import "./Projects.css";
import img1 from "../../assets/1.jpg";
import img2 from "../../assets/2.jpg";
import img3 from "../../assets/03.jpg";
import img4 from "../../assets/04.jpg";
import img5 from "../../assets/5.jpg";
import img6 from "../../assets/06.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Parallax,
  Zoom,
  EffectCoverflow,
} from "swiper";
import "swiper/css/effect-fade";
import "swiper/css/bundle";

function Projects() {
  return (
    <div className="heading" id="projects">
      <div className="main-heading">
        <h1>LIFE AT PRIME SPACE</h1>
        <p>
          We believe when everyone moving forward togather then sucess takes
          care of iteself. <br /> Here is a glimpse of what its to be a member
          of the Prime Lifespace Team.
        </p>
      </div>

      <div className="container">
        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            Parallax,
            Zoom,
            EffectCoverflow,
          ]}
          effect={"coverflow"}
          coverflowEffect={{
            rotate: 5,
            stretch: 5,
            opacity: 1,
            slideShadows: true,
          }}
          Zoom={{ maxRatio: "5" }}
          parallax={true}
          spaceBetween={50}
          slidesPerView={3}
          style={{ height: "400px", width: "130%", marginLeft: "100px" }}
          navigation={false}
          autoplay={{ delay: "1000" }}
          speed={700}
          pagination={false}
          scrollbar={false}
        >
          <SwiperSlide>
            <img src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;

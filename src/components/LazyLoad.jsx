// import React from "react";
// import Slider from "react-slick";
// import logoImg from '../assets/logo.png'

// function SimpleSlider() {
//   const settings = {
//     dots: true,
//     lazyLoad: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 2,
//     autoplay: true,
//     autoplaySpeed: 2000
//   };
//   return (
//     <div
//       className="w-screen box-border p-0 overflow-hidden ">
//       <div className="slider-containe ">
//         <Slider {...settings}>
//
//         </Slider>
//       </div>
//  </div>
//   );
// }

// export default SimpleSlider;

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  // Array of image URLs
  const images = [
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/14eb0fb178248c58.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/1bd9f11edbf77427.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/dbd07c8f0d822f95.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/11980ec333f6aa03.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/dbdfa7e48ad8cc5b.jpg?q=20",
    "https://rukminim1.flixcart.com/fk-p-flap/1620/270/image/076c4f2ee87225d7.jpg?q=20"
  ];

  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <img src={src} alt={`slide-${idx + 1}`} />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </>
  );
}

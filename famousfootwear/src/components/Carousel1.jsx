import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box } from "@chakra-ui/react";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="Black History Month"
          />
          </Box>
         
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="Black History Month"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="Black History Month"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="Black History Month"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="Black History Month"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://www.famousfootwear.com/-/media/project/tenant/famous-footwear/famous-footwear/homepage/2023/spring/1-story/wk4_022123_hp_experience_1_bhm.gif"
            alt="Black History Month"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

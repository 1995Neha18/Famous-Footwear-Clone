import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Box, Text } from "@chakra-ui/react";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{
          width: "100%",
          padding: "3rem",
          
        }}
      >
        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 30% off</Text>
            <Text>Select Shoes</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 40% off</Text>
            <Text>Select Women's styles</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 65% off</Text>
            <Text>Select Men's styles</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 35% off</Text>
            <Text>Select Kids Styles</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 50% off</Text>
            <Text>Select FlipFlops</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 30% off</Text>
            <Text>Select Sneakers</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Sandles</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 45% off</Text>
            <Text>Select Heels</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 55% off</Text>
            <Text>Select Men's Floaters</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <Box border="1px solid black" w="250px" h="100px" bg="rgb(51,63,72)" color="white" textAlign="center" >
            <Text marginTop="10px">Upto 20% off</Text>
            <Text>Select Crocks</Text>
            <button>Shop Now</button>
          </Box>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}

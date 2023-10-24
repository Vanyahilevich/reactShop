import React, {useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/scrollbar';
import "./SwiperImageProduct.css"


import {Keyboard,Mousewheel, Scrollbar, FreeMode, Navigation, Pagination, Thumbs, Zoom} from 'swiper/modules';
import {Box} from "@mui/material";

const SwiperImageProduct = ({data}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Box sx={{
      width: "100%",
      height: "600px",
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
    }}

    >

      <Swiper
        style={{
          '--swiper-navigation-color': '#000',
          '--swiper-pagination-color': '#000',
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{swiper: thumbsSwiper}}
        className="mySwiper2"
        pagination={{
          clickable: true
        }}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        zoom={true}
        modules={[Keyboard,Mousewheel, Zoom, Pagination, FreeMode, Navigation, Thumbs]}

      >
        <SwiperSlide>
          <Box className="swiper-zoom-container">
            <img style={{
              width: "100%",
              objectFit: 'cover'
            }} src={data.imageUrl ? "http://localhost:3000/" + data.imageUrl : ""} alt="image"/>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          Slide 22
        </SwiperSlide>
        <SwiperSlide>
          Slide 33
        </SwiperSlide>
        <SwiperSlide>
          Slide 44
        </SwiperSlide>
        <SwiperSlide>
          Slide 55
        </SwiperSlide>
      </Swiper>
      <Swiper
        style={{
          marginRight: "16px",
          padding: "0px"
        }}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        className="mySwiper"
        direction={'vertical'}
        scrollbar={true}
        mousewheel={true}
        modules={[Mousewheel, Scrollbar,FreeMode, Navigation, Thumbs]}

      >
        <SwiperSlide>
          <img style={{
            width: "100%",
            objectFit: 'cover'
          }} src={data.imageUrl ? "http://localhost:3000/" + data.imageUrl : ""} alt="image"/>
        </SwiperSlide>
        <SwiperSlide>
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          Slide 3
        </SwiperSlide>
        <SwiperSlide>
          Slide 4
        </SwiperSlide>
        <SwiperSlide>
          Slide 5
        </SwiperSlide>

      </Swiper>
    </Box>
  );
};

export default SwiperImageProduct;

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Carousel.module.css";

// Import Swiper styles
import "swiper/css";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";

export default ({ data, renderComponent }) => {
  return (
    <Swiper
      className={styles.swiper}
      spaceBetween={10}
      slidesPerView="auto"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <CarouselLeftNavigation />
      <CarouselRightNavigation />
      {data &&
        data.map((ele) => <SwiperSlide>{renderComponent(ele)}</SwiperSlide>)}
    </Swiper>
  );
};

import React from "react";
import styles from "./CarouselLeftNavigation.module.css";
import { useSwiper } from "swiper/react";

function CarouselLeftNavigation() {
  const swiper = useSwiper();

  return (
    <div className={styles.carousel_left_navigation}>
      <img
        className={styles.swipe_button}
        onClick={() => swiper.slidePrev()}
        src={require("../../../assets/left-navigation.png")}
      />
    </div>
  );
}

export default CarouselLeftNavigation;

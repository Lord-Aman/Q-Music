import React from "react";
import styles from "./CarouselRightNavigation.module.css";
import { useSwiper } from "swiper/react";

function CarouselRightNavigation() {
  const swiper = useSwiper();

  return (
    <div className={styles.carousel_right_navigation}>
      <img
        className={styles.swipe_button}
        onClick={() => swiper.slideNext()}
        src={require("../../../assets/right-navigation.png")}
      />
    </div>
  );
}

export default CarouselRightNavigation;

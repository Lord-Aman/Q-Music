import React from "react";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/Navbar/Navbar";

import HeadphoneImage from "../assets/headphones.png";
import SimpleAccordion from "../components/Accordion/Accordion";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner
        text="100 Thousand songs, ad free. Over thousands podcast episodes"
        image={HeadphoneImage}
      />
      <SimpleAccordion />
    </div>
  );
}

export default Home;

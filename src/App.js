import React from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import HeadphoneImage from "./assets/headphones.png";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div>
      <Navbar />
      <Banner
        text="100 Thousand songs, ad free. Over thousands podcast episodes"
        image={HeadphoneImage}
      />
      <FAQ />
    </div>
  );
}

export default App;

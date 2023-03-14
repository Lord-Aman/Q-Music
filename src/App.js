import React, { useState, useEffect } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import HeadphoneImage from "./assets/headphones.png";
import FAQ from "./components/FAQ/FAQ";
import HomeSectionWrapper from "./components/HomeSectionWrapper/HomeSectionWrapper";
import Table from "./components/Table/Table";
import { fetchSongs } from "./api/api";

function App() {
  const [tableData, setTableData] = useState([]);

  const fetchTableData = async () => {
    const res = await fetchSongs();
    setTableData(res);
  };

  useEffect(() => {
    fetchTableData();
  }, []);
  return (
    <div>
      <Navbar />
      <Banner
        text="100 Thousand songs, ad free. Over thousands podcast episodes"
        image={HeadphoneImage}
      />
      <HomeSectionWrapper category="Top" isAlbum={true} />
      <HomeSectionWrapper category="New" isAlbum={true} />
      <HomeSectionWrapper category="Songs" isAlbum={false} />
      {tableData && <Table data={tableData} />}
      <FAQ />
    </div>
  );
}

export default App;

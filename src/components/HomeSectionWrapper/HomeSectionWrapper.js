import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styles from "./HomeSectionWrapper.module.css";
import Carousel from "../Carousel/Carousel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "../../api/api";

function HomeSectionWrapper({ category, isAlbum }) {
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [value, setValue] = React.useState(0);
  const [tabValue, setTabValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setTabValue(event.target.innerText);
  };

  const fetchData = async () => {
    const dataCategory =
      category.toLowerCase() === "top"
        ? fetchTopAlbums
        : category.toLowerCase() === "new"
        ? fetchNewAlbums
        : fetchSongs;

    const res = await dataCategory();
    setAllData(res);
    setData(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterSongData = () => {
      if (value === 0) {
        setData(allData);
        return;
      }
      const filteredData = allData.filter(
        (ele) => ele.genre.label.toLowerCase() === tabValue.toLowerCase()
      );
      setData(filteredData);
      console.log(filteredData);
    };

    filterSongData();
  }, [tabValue]);

  return (
    <div className={styles.album_container}>
      <div className={styles.album_container_header}>
        <h1 className={styles.album_title}>
          {category} {isAlbum && "Albums"}
        </h1>
        <button
          className={styles.album_button}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show all" : "Collapse"}
        </button>
      </div>
      {!isAlbum && (
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            classes={{ root: styles.tabs, indicator: styles.indicator }}
            indicatorColor="green"
            textColor="#fff"
          >
            <Tab label="All" />
            <Tab label="Rock" />
            <Tab label="Pop" />
            <Tab label="Jazz" />
            <Tab label="Blues" />
          </Tabs>
        </div>
      )}
      <div className={styles.album_card_container}>
        {data && isCollapsed ? (
          <Carousel
            data={data}
            renderComponent={(ele) => <Card data={ele} isAlbum={isAlbum} />}
          />
        ) : (
          data.map((album, index) => (
            <Card key={index.toString()} data={album} isAlbum={isAlbum} />
          ))
        )}
      </div>
    </div>
  );
}

export default HomeSectionWrapper;

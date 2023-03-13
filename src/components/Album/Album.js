import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Axios from "axios";
import styles from "./Album.module.css";
import Carousel from "../Carousel/Carousel";

function Album({ category }) {
  const [albums, setAlbums] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const fetchTopAlbums = async () => {
    try {
      const res = await Axios.get(
        `https://qtify-backend-labs.crio.do/albums/${category.toLowerCase()}`
      );
      setAlbums(res.data);
    } catch (err) {
      console.log("Error in fetching Albums", err);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
  }, []);

  return (
    <div className={styles.album_container}>
      <div className={styles.album_container_header}>
        <h1 className={styles.album_title}>{category} Albums</h1>
        <button
          className={styles.album_button}
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? "Show all" : "Collapse"}
        </button>
      </div>

      <div className={styles.album_card_container}>
        {albums && isCollapsed ? (
          <Carousel
            data={albums}
            renderComponent={(ele) => <Card data={ele} />}
          />
        ) : (
          albums.map((album, index) => (
            <Card key={index.toString()} data={album} />
          ))
        )}
      </div>
    </div>
  );
}

export default Album;

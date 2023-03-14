import React from "react";
import styles from "./Card.module.css";

function Card({ data, isAlbum }) {
  return (
    <div className={styles.card_container}>
      <div className={styles.card}>
        <img className={styles.card_image} src={data.image} />

        <div className={styles.card_follows}>
          {isAlbum && (
            <p className={styles.card_follows_text}>{data.follows} Follows</p>
          )}
          {!isAlbum && (
            <p className={styles.card_follows_text}>{data.likes} Likes</p>
          )}
        </div>
      </div>
      <p className={styles.card_title}>{data.title}</p>
    </div>
  );
}

export default Card;

import React from "react";

import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const handleSubmit = () => {};

  return (
    <form className={styles.search_container} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.search_input}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <button type="submit" className={styles.search_button}>
        <img src={require("../../assets/search.png")} alt="search" />
      </button>
    </form>
  );
}

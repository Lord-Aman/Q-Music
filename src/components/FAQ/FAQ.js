import React, { useState, useEffect } from "react";
import SimpleAccordion from "../Accordion/Accordion";
import styles from "./FAQ.module.css";
import { fetchFAQs } from "../../api/api";

function FAQ() {
  const [FAQs, setFAQs] = useState([]);

  const getData = async () => {
    const data = await fetchFAQs();
    setFAQs(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>FAQs</h1>
      <SimpleAccordion data={FAQs} />
    </div>
  );
}

export default FAQ;

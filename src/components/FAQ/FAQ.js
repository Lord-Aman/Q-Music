import React from "react";
import SimpleAccordion from "../Accordion/Accordion";
import styles from "./FAQ.module.css";

function FAQ() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>FAQs</h1>
      <SimpleAccordion />
    </div>
  );
}

export default FAQ;

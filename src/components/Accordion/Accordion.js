import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.css";

export default function SimpleAccordion({ data }) {
  return (
    <div className={styles.accordion_container}>
      {data &&
        data.map((ele, index) => (
          <Accordion key={index.toString()} className={styles.accordion}>
            <AccordionSummary
              className={styles.accordion_summary}
              expandIcon={<ExpandMoreIcon className={styles.expand_button} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {/* Problem Statement  */}
              <Typography>{ele.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{ele.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
}

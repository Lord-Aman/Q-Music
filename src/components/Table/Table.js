import React, { useState } from "react";
import styles from "./Table.module.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
} from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

export default function TableWithPagination({ data }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const highlightPage = (pageIndex) => {
    let style = { color: "#fff" };
    if (pageIndex === page) {
      style = { ...style, backgroundColor: "green", borderRadius: "15px" };
    }
    return style;
  };

  function millisecondsToMinutes(timeInMs) {
    const seconds = Math.floor(timeInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  }

  const numPages = Math.ceil(data.length / rowsPerPage);
  const pageButtons = [];

  for (let i = 0; i < numPages; i++) {
    pageButtons.push(
      <Button
        key={i}
        className={styles.pageButton}
        style={highlightPage(i)}
        onClick={() => setPage(i)}
        disabled={i === page}
      >
        {i + 1}
      </Button>
    );
  }

  return (
    <div>
      <div className={styles.pagination}>
        <IconButton onClick={() => setPage(page - 1)} disabled={page === 0}>
          <NavigateBefore className={styles.navigate_buttons} />
        </IconButton>
        {pageButtons}
        <IconButton
          onClick={() => setPage(page + 1)}
          disabled={page === numPages - 1}
        >
          <NavigateNext className={styles.navigate_buttons} />
        </IconButton>
      </div>
      <TableContainer component={Paper} className={styles.table_container}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow className={styles.table_row}>
              <TableCell className={styles.table_cell}>Title</TableCell>
              <TableCell
                style={{ textAlign: "center" }}
                className={styles.table_cell}
              >
                Artists
              </TableCell>
              <TableCell
                style={{ textAlign: "right" }}
                className={styles.table_cell}
              >
                Duration
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id} className={styles.table_row}>
                  <TableCell className={styles.table_cell}>
                    <div className={styles.song_image_title_container}>
                      <img
                        className={styles.song_image}
                        src={row.image}
                        alt="song"
                      />
                      <p className={styles.song_title}>{row.title}</p>
                    </div>
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "center" }}
                    className={styles.table_cell}
                  >
                    {row.artists.join(", ")}
                  </TableCell>
                  <TableCell
                    style={{ textAlign: "right" }}
                    className={styles.table_cell}
                  >
                    {millisecondsToMinutes(row.durationInMs)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

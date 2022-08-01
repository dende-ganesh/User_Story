import { Grid, Typography } from "@mui/material";
import React from "react";
import { BookListProps } from "../BookGrid";

const BookList = ({ bookList }: BookListProps) => {
  return (
    <Grid container direction="column" onClick={()=>{ /* TODO document why this arrow function is empty */ }}>
      {bookList.map((book) => (
        <Grid item container>
          <Grid item>{book.votes}</Grid>
          <Grid item>{book.image}</Grid>
          <Grid item>
            <Typography>{book.title}</Typography>
            <Typography>{book.author}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default BookList;

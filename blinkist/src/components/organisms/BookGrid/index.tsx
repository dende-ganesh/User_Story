import { Grid } from "@mui/material";
import React from "react";
import BookCard from "../../molecules/BookCard";

export interface BookListProps{
  bookList: {
    image?: string;
    title: string;
    author: string;
    time?: string;
    votes?:number;
  }[];
}

const BookGrid = (props: BookListProps) => {
  const { bookList } = props;
  return bookList.map((book) => {
    <Grid item>
      <BookCard
        title={book.title}
        author={book.author}
        time={book.time}
        image={book.image}
      ></BookCard>
    </Grid>;
  });
};

export default BookGrid;

import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

interface bookDetailsProps{
    "image"?:string,
    "title":string,
    "author":string,
    "time"?:string,
}
const BookCard = (props:bookDetailsProps) => {
  return (
    <Card>
        <CardMedia
         component="img"
         image={props.image}
         alt="book"/>
         <CardContent>
            <Typography>{props.title}</Typography>
            <Typography>{props.author}</Typography>
            <Typography>{props.time}</Typography>
         </CardContent>

    </Card>
  )
}

export default BookCard

import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'
import Icon from '../../atoms/Icon'
interface WatchListItemProps{
    graphSrc:string,
    cryptoSrc:string,
    name:string,
    price:string,
}
const WatchListItem = ({graphSrc,cryptoSrc,name,price}:WatchListItemProps) => {
  return (
    <Card>
        <CardContent>
            <Icon imageSrc={cryptoSrc} alt={name}/>
            {/* typography with */}
        </CardContent>
        <CardMedia  component="img" image={graphSrc} alt="watchlist item"></CardMedia>
    </Card>
  )
}

export default WatchListItem

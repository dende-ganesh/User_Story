import { Card, CardContent, CardMedia } from '@mui/material'
import React from 'react'

interface TradeItemProps{
  name:string,
  price:string;
  change:string,
  marketCap:string,
  watch:boolean;
}
const TradeItem = (props:TradeItemProps) => {
  return (
    <div>
      <Card>
        <CardMedia>
          <img src="" alt="" />
        </CardMedia>
        <CardContent>
          {/* crypto name */}
          {/* price */}
          {/* change */}
          {/* market cap */}
        </CardContent>
      </Card>
    </div>
  );
}

export default TradeItem
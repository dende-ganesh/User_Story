import { Grid } from '@mui/material';
import React from 'react'
import WatchListItem from '../../molecules/WatchListItem';

const WatchList = () => {
    const watchListItems=getWatchListItems();
  return (
    <Grid container>
    {watchListItems.map((item:any) => 
        (<WatchListItem graphSrc={item.graphSrc} cryptoSrc={item.cryptoSrc} name={item.name} price={item.price}></WatchListItem>))}
    </Grid>
  )
}

export default WatchList

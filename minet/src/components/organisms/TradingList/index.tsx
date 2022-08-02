import { Grid } from "@mui/material";
import React from "react";
import TradeItem from "../../molecules/TradeItem";

const TradingList = () => {
  const tradeItems = getTradeItems();
  return (
    <Grid container>
      {tradeItems.map((item: any) => (
        <TradeItem name={item.name} price={item.price} change={item.change} marketCap={item.marketCap} watch={false}   />
      ))}
    </Grid>
  );
};

export default TradingList;

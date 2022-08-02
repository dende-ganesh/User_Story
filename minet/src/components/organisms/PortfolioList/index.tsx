import { Grid } from "@mui/material";
import React from "react";
import PortfolioListItem from "../../molecules/PortfolioListItem";

const PortfolioList = () => {
  const portfolioListItems: any[] = [];
  // getPortfolioListItems();
  return (
    <Grid container>
      {portfolioListItems.map((item: any) => (
        <PortfolioListItem
          name={item.name}
          logo={""}
          amount={""}
          shortform={""}
        />
      ))}
    </Grid>
  );
};

export default PortfolioList;

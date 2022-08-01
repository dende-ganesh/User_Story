import { Grid } from '@mui/material';
import React from 'react'


const WalletList = ({coinName}) => {
    const orderHistory=getOrderHistory(coinName);
  return (
    <Grid container>
      {orderHistory.map((item: any) => (
        // <OrderDetailItem/>
      ))}
    </Grid>
  );
}

export default WalletList

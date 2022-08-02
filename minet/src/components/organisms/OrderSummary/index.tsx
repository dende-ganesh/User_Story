import { Card, CardActions } from "@mui/material";
import React from "react";
import Buttons from "../../atoms/Button";

interface Props {
  sell: boolean;
}

const OrderSummary = (props: Props) => {
  const handleClick=()=>{}
  return (
    <div>
      <Card>
        {/* order details */}
        {/* order details */}
        <CardActions>
          <Buttons variant={"text"} text={props.sell ? "Sell" : "Buy"} handleClick={
          handleClick} />
        </CardActions>
      </Card>
    </div>
  );
};

export default OrderSummary;

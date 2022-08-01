import { Box, Grid, styled, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Button from "../../atoms/Button";
import ImageWithTypography from "../../atoms/ImageWithTypography";
import KindleModal from "../KindleModal";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";

const BookDetails = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [tabValue, setTabValue] = useState("0");
  const handleAddToLibrary = () => {};
  const handleSendToKindle = () => {
    setDialogOpen(true);
  };
  const handleBuy = () => {};
  const handleChange = (e: any, val: string) => setTabValue(val);

  return (
    <>
      <Grid>
        <Grid item>
          <Typography>Book Name</Typography>
          <Typography>Book tagline</Typography>
          <Typography>Authors</Typography>
          <ImageWithTypography icon="" text={"min-read"} />
          <ImageWithTypography icon="" text={"Audio available"} />
          <Grid>
            <Button
              variant={"text"}
              handleClick={handleAddToLibrary}
              text="Read Now"
            />
            <Button variant={"text"} handleClick={handleBuy} text="Buy Book" />
            <Button
              variant={"text"}
              handleClick={handleSendToKindle}
              text="Send to Kindle"
            />
          </Grid>
          <KindleModal open={dialogOpen} />
          <Tabs
            value={tabValue}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Synopsis" />
            <Tab label="Who is it for" />
            <Tab label="About the author" />
          </Tabs>

          <TabPanel value="0">Synopsis</TabPanel>
          <TabPanel value="1">Who is it for</TabPanel>
          <TabPanel value="2">About the author</TabPanel>
        </Grid>
        <Grid item>
          <img src=""></img>
        </Grid>
      </Grid>
    </>
  );
};

export default BookDetails;

import { Box, Grid, Typography } from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';


import Modal from "@mui/material/Modal";

import React, { useState } from "react";
interface ExploreProps {
  exploreClicked: boolean;
}

const ExploreMenu = ({ exploreClicked }: ExploreProps) => {
  const [open, setOpen] = useState(exploreClicked);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState("0");
  const handleChange=(_e:any,newValue:string)=>setValue(newValue);
  return (
      <Modal open={open} onClose={handleClose}>
        <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
          </Box>

        <TabPanel value="0">
          Item One
        </TabPanel>
        <TabPanel value="1" >
          Item Two
        </TabPanel>
        <TabPanel value="2">
          Item Three
        </TabPanel>
        </Box>

      </Modal>
  );
};

export default ExploreMenu;

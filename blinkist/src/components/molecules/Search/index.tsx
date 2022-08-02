import { SearchOutlined } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";

import React from "react";

const SearchBar = () => {
  return (
    <Input
      id="search"
      startAdornment={
        <InputAdornment position="start">
          <SearchOutlined />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;

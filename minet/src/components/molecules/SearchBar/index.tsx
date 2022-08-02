import { SearchOutlined } from "@mui/icons-material";
import { Input, InputAdornment } from "@mui/material";

import React from "react";

const SearchBar = () => {
  return (
    <Input
      id="search"
      endAdornment={
        <InputAdornment position="end">
          <SearchOutlined />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;

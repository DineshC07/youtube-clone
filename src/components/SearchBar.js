import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";
const SearchBar = ({ onFormSubmit }) => {
  const [inputval, setInputVal] = useState("");

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  const handleSubmit = (e) => {
    onFormSubmit(inputval);
    e.preventDefault();
  };

  return (
    <Paper elevation={6} style={{ padding: "25px" }}>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Search..." onChange={handleChange} />
      </form>
    </Paper>
  );
};

export default SearchBar;

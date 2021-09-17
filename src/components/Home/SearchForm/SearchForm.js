import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import {
  fetchPhotos,
  resetPage,
} from "../../../redux/actionCreators/actionCreator";

function SearchForm(params) {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  function handleSearchChange(event) {
    setSearch(event.target.value);
  }

  function handleSearch(event) {
    if (search) {
      event.preventDefault();
      dispatch(fetchPhotos(token, search));
      dispatch(resetPage());
      setSearch("");
    } else {
      event.preventDefault();
      alert("Cant search nothing");
      setSearch("");
    }
  }

  return (
    <Paper
      style={{
        maxWidth: "300px",
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
      }}
      component="form"
    >
      <InputBase
        style={{ flex: 1 }}
        onChange={handleSearchChange}
        value={search}
        placeholder="Search photos"
        inputProps={{ "aria-label": "search photos" }}
      />
      <IconButton type="submit" aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchForm;

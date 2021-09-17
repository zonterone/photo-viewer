import React from "react";
import { useSelector } from "react-redux";

import PhotosList from "./PhotosList/PhotosList";
import User from "./User/User";
import SearchForm from "./SearchForm/SearchForm";

function Home() {
  const title = useSelector((state) => state.title);

  return (
    <>
      <header
        style={{
          display: "flex",
          maxWidth: "920px",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "20px",
          margin: "0 auto",
        }}
      >
        <SearchForm></SearchForm>
        <User></User>
      </header>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <PhotosList></PhotosList>
    </>
  );
}

export default Home;

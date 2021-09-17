import React from "react";

import CircularProgress from "@material-ui/core/CircularProgress";

function Loader() {
  return <CircularProgress style={{ display: "flex", margin: "auto" }} />;
}

export default Loader;

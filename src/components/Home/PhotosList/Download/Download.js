import React from "react";

import IconButton from "@material-ui/core/IconButton";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function Download(props) {
  const { download } = props.props.link;

  return (
    <IconButton onClick={() => window.open(download)}>
      <ArrowDownwardIcon style={{ color: "white" }}></ArrowDownwardIcon>
    </IconButton>
  );
}

export default Download;

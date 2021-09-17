import React, { useState } from "react";

import { Blurhash } from "react-blurhash";

import Loader from "../../../Loader/Loader";

function Photo(props) {
  const [isLoaded, setIsLoaded] = useState(false);

  const { blur_hash, urls, alt_description } = props.props;

  return (
    <>
      {" "}
      <img
        style={{
          objectFit: "cover",
          top: "50%",
          width: "100%",
          height: "100%",
          position: "relative",
          transform: "translateY(-50%)",
        }}
        hidden={!isLoaded}
        src={urls.small}
        alt={alt_description}
        onLoad={() => setIsLoaded(true)}
      ></img>
      <Blurhash
        style={isLoaded ? { display: "none" } : { display: "inline-block" }}
        hash={blur_hash}
        width={"100%"}
        height={"100%"}
        resolutionX={32}
        resolutionY={32}
        punch={1}
      />
      <span
        hidden={isLoaded}
        style={{ position: "absolute", top: "45%", left: "45%" }}
      >
        <Loader></Loader>
      </span>
    </>
  );
}

export default Photo;

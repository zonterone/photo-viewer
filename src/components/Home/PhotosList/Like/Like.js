import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function Like(props) {
  const { like, photoId, token } = props.props;
  const [isLiked, setIsliked] = useState(like);

  function likeFetch(method) {
    if (token) {
      const url = `https://api.unsplash.com/photos/${photoId}/like`;

      fetch(url, {
        method: method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => {
          resp.ok ? setIsliked(!isLiked) : alert("Something went wrong");
        })
        .catch((err) => {
          console.log(err);
          alert("Something went wrong");
        });
    } else {
      alert("You need login to like photos");
    }
  }

  function handleLike() {
    if (isLiked) {
      likeFetch("DELETE");
    } else {
      likeFetch("POST");
    }
  }

  return (
    <IconButton
      onClick={handleLike}
      aria-label={isLiked ? "you already liked this" : "like"}
    >
      {isLiked ? (
        <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
      ) : (
        <FavoriteBorderIcon style={{ color: "white" }}></FavoriteBorderIcon>
      )}
    </IconButton>
  );
}

export default Like;

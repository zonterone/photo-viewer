import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  ImageListItemBar,
  ImageList,
  ImageListItem,
} from "@material-ui/core";

import {
  fetchMorePhotos,
  fetchPhotos,
  nextPage,
} from "../../../redux/actionCreators/actionCreator";

import Loader from "../../Loader/Loader";
import Like from "./Like/Like";
import Download from "./Download/Download";
import Photo from "./Photo/Photo";

function PhotosList() {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photos);
  const search = useSelector((state) => state.title);
  const token = useSelector((state) => state.token);
  const page = useSelector((state) => state.page);

  const [cols, setCols] = useState(1);

  useEffect(() => {
    dispatch(fetchPhotos(token));
    const screenWidth = document.documentElement.clientWidth;
    if (screenWidth > 1300) {
      setCols(4);
    } else if (screenWidth > 900 && screenWidth < 1300) {
      setCols(3);
    } else if (screenWidth < 900 && screenWidth > 670) {
      setCols(2);
    } else {
      setCols(1);
    }
  }, [dispatch, token]);

  useEffect(() => {
    function loadOnScroll() {
      if (
        window.scrollY >
        document.body.scrollHeight -
          document.documentElement.clientHeight -
          1000
      ) {
        window.removeEventListener("scroll", loadOnScroll);
        dispatch(fetchMorePhotos(token, search, page));
        dispatch(nextPage());
      }
    }
    window.addEventListener("scroll", loadOnScroll);

    return () => {
      window.removeEventListener("scroll", loadOnScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photos, search]);

  return (
    <div>
      {photos.length > 0 ? (
        <>
          <div>
            <ImageList rowHeight={300} cols={cols}>
              {photos.map((photo) => (
                <ImageListItem key={photo.id}>
                  <Photo props={photo}></Photo>
                  <ImageListItemBar
                    title={photo.description || "no description"}
                    subtitle={
                      <span>
                        Photo by{" "}
                        <a
                          href={photo.user.links.html}
                          style={{ color: "white" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {photo.user.name}
                        </a>{" "}
                        on{" "}
                        <a
                          href={photo.links.html}
                          style={{ color: "white" }}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Unsplash
                        </a>
                      </span>
                    }
                    actionIcon={
                      <Container style={{ display: "flex", padding: "0" }}>
                        <Download props={{ link: photo.links }}></Download>
                        <Like
                          props={{
                            like: photo.liked_by_user,
                            photoId: photo.id,
                            token: token,
                          }}
                        ></Like>
                      </Container>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </>
      ) : (
        <Loader></Loader>
      )}
    </div>
  );
}

export default PhotosList;

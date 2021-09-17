import {
  FETCH_PHOTOS,
  FETCH_MORE_PHOTOS,
  SET_TOKEN,
  SET_PHOTOS_LIST_TITLE,
  NEXT_PAGE,
  RESET_PAGE,
} from "../actions/action";

import { createApi } from "unsplash-js";
import { CLIENT_ID } from "../../keys";

export function fetchPhotos(token, search) {
  const unsplash = createApi({
    accessKey: token ? "Bearer " + token : CLIENT_ID,
  });

  if (search) {
    return (dispatch) => {
      unsplash.search
        .getPhotos({ query: search, page: 1, perPage: 12 })
        .then((resp) => {
          return resp.originalResponse.ok ? resp.response : console.log(resp);
        })
        .then((resp) => {
          dispatch({ type: FETCH_PHOTOS, payload: resp.results });
          dispatch({ type: SET_PHOTOS_LIST_TITLE, payload: search });
        })
        .catch((err) => {
          console.log("err", err);
          alert("Something went wrong");
        });
    };
  } else {
    return (dispatch) => {
      unsplash.photos
        .getRandom({ count: 12 })
        .then((resp) => {
          return resp.originalResponse.ok ? resp.response : console.log(resp);
        })
        .then((resp) => {
          dispatch({ type: FETCH_PHOTOS, payload: resp });
          dispatch({
            type: SET_PHOTOS_LIST_TITLE,
            payload: "Some random photos",
          });
        })
        .catch((err) => {
          console.log("err", err);
          alert("Something went wrong");
        });
    };
  }
}

export function fetchMorePhotos(token, search, page) {
  const unsplash = createApi({
    accessKey: token ? "Bearer " + token : CLIENT_ID,
  });

  if (search) {
    return (dispatch) => {
      unsplash.search
        .getPhotos({ query: search, page: page, perPage: 12 })
        .then((resp) => {
          return resp.originalResponse.ok ? resp.response : console.log(resp);
        })
        .then((resp) => {
          dispatch({ type: FETCH_MORE_PHOTOS, payload: resp.results });
        })
        .catch((err) => {
          console.log("err", err);
          alert("Something went wrong");
        });
    };
  } else {
    return (dispatch) => {
      unsplash.photos
        .getRandom({ count: 12 })
        .then((resp) => {
          return resp.originalResponse.ok ? resp.response : console.log(resp);
        })
        .then((resp) => {
          dispatch({ type: FETCH_MORE_PHOTOS, payload: resp });
        })
        .catch((err) => {
          console.log("err", err);
          alert("Something went wrong");
        });
    };
  }
}

export function setToken(url) {
  return (dispatch) =>
    fetch(url)
      .then((resp) => (resp.ok ? resp.json() : console.log("err", resp)))
      .then((resp) => {
        dispatch({ type: SET_TOKEN, payload: resp.access_token });
        localStorage.setItem("token", JSON.stringify(resp.access_token));
      })
      .catch((resp) => {
        console.log("err", resp);
        alert("Something went wrong");
      });
}

export function setPhotosTitle(title) {
  return {
    type: SET_PHOTOS_LIST_TITLE,
    payload: title,
  };
}

export function nextPage() {
  return {
    type: NEXT_PAGE,
  };
}

export function resetPage() {
  return {
    type: RESET_PAGE,
  };
}

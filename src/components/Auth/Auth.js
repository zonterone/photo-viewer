import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getTokenUrl } from "../../urls";

import { setToken } from "../../redux/actionCreators/actionCreator";

function Auth() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token);

  useEffect(() => {
    if (!token) {
      dispatch(setToken(getTokenUrl));
    }
  });

  return (
    <Route exact path="/auth">
      {token ? <Redirect to="/home" /> : null}
    </Route>
  );
}

export default Auth;

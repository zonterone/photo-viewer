import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { authorizeUrl } from "../../../urls";

function User() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("token") !== "undefined"
    ) {
      setIsLogged(true);
    }
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setIsLogged(false);
    window.location.reload();
  }

  if (isLogged) {
    return (
      <div style={{ display: "flex" }}>
        <Button
          size="small"
          variant="outlined"
          onClick={handleLogout}
          color="secondary"
        >
          Logout
        </Button>
      </div>
    );
  } else {
    return (
      <div style={{ display: "flex" }}>
        <a href={authorizeUrl} style={{ textDecoration: "none" }}>
          <Button size="small" variant="outlined" color="primary">
            Login
          </Button>
        </a>
      </div>
    );
  }
}

export default User;

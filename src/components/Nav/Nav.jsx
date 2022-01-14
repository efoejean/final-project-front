import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import indexAuth from "../api/index";

const Nav = () => {
  const navigate = useNavigate();
  // use useState to set the current user
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  // logout function
  const logout = () => {
    indexAuth.logout();
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    // const token = user?.data?.token;

    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <AppBar
      className="flex flex-row ... justify-between ... rounded-sm -mx-0
      "
      position="static"
      color="inherit"
    >
      <div>
        <Typography component={Link} to="/" variant="h6">
          {" "}
          Welcome
        </Typography>
      </div>
      <Toolbar>
        {user ? (
          <div className="">
            <Avatar></Avatar>
            <Typography className="" variant="h6">
              {}
            </Typography>
            <Button variant="contained" color="secondary" onClick={logout}>
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained"
            color="secondary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const user = null;

  return (
    <AppBar position="static" color="inherit">
      <div>
        <Typography component={Link} to="/" variant="h6">
          {" "}
          Welcome
        </Typography>
      </div>
      <Toolbar>
        {user ? (
          <div className="">
            <Avatar alt={user.result.name} src={user.result.imageUrl}>
              user.name.charAt(0)
            </Avatar>
            <Typography className="" variant="h6">
              {user.result.name}
            </Typography>
            <Button variant="contained" color="secondary">
              Logout
            </Button>
          </div>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

export default Nav;

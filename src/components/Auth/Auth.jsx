import { Avatar, Container, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React from "react";

const Auth = () => {
  const isSignup = false;

  const handleSubmit = (e) => {};

  return (
    <Container maxWidth="sm">
      <Paper className="p-8 m-8 rounded-sm">
        <Avatar
          className="m-8"
          alt="Remy Sharp"
          src="https://source.unsplash.com/random"
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className="" onSubmit={handleSubmit}></form>
      </Paper>
    </Container>
  );
};

export default Auth;

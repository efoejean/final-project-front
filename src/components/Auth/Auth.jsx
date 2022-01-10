import { Avatar, Container, Grid, Paper, Typography } from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import Input from "./Input";

const Auth = () => {
  const isSignup = false;

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};

  const [showPassword, setshowPassword] = useState(false);

  // toggles the password visibility and passing as a prop to the input component
  const handleShowPassword = () => setshowPassword((prev) => !prev);

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
        <form className="" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="FirstName"
                  label="First Name"
                  onChange={handleChange}
                />
                <Input
                  name="LastName"
                  label="Last Name"
                  variant="filled"
                  onChange={handleChange}
                />
              </>
            )}
            <Input
              name="username"
              label="Username"
              type="text"
              onChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="repeatPassword"
                handleShowPassword={handleShowPassword}
                type={showPassword ? "text" : "password"}
              />
            )}
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

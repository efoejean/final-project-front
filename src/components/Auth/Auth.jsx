import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";
import Input from "./Input";

const Auth = () => {
  const isSignup = false;

  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  const handleClose = () => {};

  const [showPassword, setshowPassword] = useState(false);

  // toggles the password visibility and passing as a prop to the input component
  const handleShowPassword = () => setshowPassword((prev) => !prev);

  return (
    <Container maxWidth="sm">
      <Paper className="p-8 m-8 rounded-sm">
        <Avatar className="content-center ...">
          <LockOutlinedIcon />
        </Avatar>
        <Typography className="text-center ..." component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className="" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  name="FirstName"
                  label="First Name"
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <Input
                  name="LastName"
                  label="Last Name"
                  placeholder="Last Name"
                  variant="filled"
                  onChange={handleChange}
                />
              </>
            )}
            <Input
              name="username"
              label="Username"
              placeholder="Username"
              type="text"
              onChange={handleChange}
            />
            <Input
              name="password"
              label="Password"
              placeholder="Password"
              handleShowPassword={handleShowPassword}
              type={showPassword ? "text" : "password"}
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="repeatPassword"
                placeholder="Repeat Password"
                handleShowPassword={handleShowPassword}
                type={showPassword ? "text" : "password"}
              />
            )}
          </Grid>
          <div className="flex justify-center mt-2 gap-5">
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className="my-px"
              onClick={handleSubmit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

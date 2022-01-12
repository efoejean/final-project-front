import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState } from "react";

const Auth = () => {
  const handleSubmit = (e) => {};
  const handleChange = (e) => {};
  const handleClose = () => {};

  // initial state of the form
  const intialState = {
    FirstName: "",
    LastName: "",
    username: "",
    Password: "",
    confirmPassword: "",
  };

  // use useState to set the iniital state of the button
  const [isSignup, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({ intialState });

  // toggles between signup and signin
  const switchAuthMode = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <Container maxWidth="sm">
      <Paper className=" flex flex-col ... items-center ... p-8 m-8 rounded-sm">
        <Avatar color="inherit" className="">
          <LockOutlinedIcon />
        </Avatar>
        <Typography className="text-center ..." component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className="m-9 " onSubmit={handleSubmit}>
          <Grid className="gap-5" container spacing={2}>
            {isSignup && (
              <>
                <TextField
                  name="FirstName"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  required
                />

                <TextField
                  name="LastName"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  required
                />
              </>
            )}
            <TextField
              name="username"
              label="Username"
              variant="outlined"
              type="text"
              fullWidth
              onChange={handleChange}
              required
            />
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              onChange={handleChange}
              required
            />
            {isSignup && (
              <TextField
                name="confirmPassword"
                label="Repeat Password"
                variant="outlined"
                type="password"
                fullWidth
                onChange={handleChange}
                required
              />
            )}
          </Grid>
          <div className="flex justify-center mt-8 gap-5">
            <Button variant="contained" color="inherit" onClick={handleClose}>
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
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchAuthMode}>
                {isSignup
                  ? "Already have an account Sign In"
                  : " Dont have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;

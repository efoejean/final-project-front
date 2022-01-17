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
import { useNavigate } from "react-router-dom";
import indexAuth from "../api/index";

const Auth = () => {
  // initial state of the form
  const intialState = {
    FirstName: "",
    LastName: "",
    username: "",
    Password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  // use useState to set the iniital state of the button
  const [isSignup, setIsSignUp] = useState(false);

  const [formData, setFormData] = useState({ intialState });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      try {
        await indexAuth.signup(formData).then(
          () => {
            // ToDo: redirect to profile page , will need to add a profile page

            navigate("/customers");
            window.location.reload();
          },
          (err) => {
            console.log(err.message);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }

    if (!isSignup) {
      try {
        await indexAuth.signin(formData).then(
          () => {
            // ToDo: redirect to profile page , will need to add a profile page

            navigate("/customers");
            window.location.reload();
          },
          (err) => {
            console.log(err.message);
          }
        );
      } catch (error) {
        console.log(error);
      }
    }
  };

  // spread other properties of the formData object and only change the value of the property that is being changed with the target value
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClose = () => {};

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

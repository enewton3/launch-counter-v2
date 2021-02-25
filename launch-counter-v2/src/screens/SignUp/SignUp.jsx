import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: { width: "80vw", margin: "10vh auto" },

  form: {
    display: "flex",
    flexFlow: "column wrap",
  },
}));

export default function SignUp(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Paper className={classes.root}>
      <form
        className={classes.form}
        onSubmit={(e) => {
          e.preventDefault();
          handleRegister(formData);
        }}
      >
        <TextField
          className="register-input"
          name="username"
          label="Username"
          type="username"
          value={username}
          variant="filled"
          onChange={handleChange}
          required
        />
        <TextField
          className="register-input"
          name="email"
          label="Email"
          type="email"
          value={email}
          variant="filled"
          onChange={handleChange}
          required
        />
        <TextField
          className="register-input"
          name="password"
          label="Password"
          type="password"
          value={password}
          variant="filled"
          onChange={handleChange}
          required
        />
        {/* <TextField
          className="register-input"
          name="passwordConfirmation"
          label="Confirm Password"
          type="password"
          value={passwordConfirmation}
          variant="filled"
          onChange={handleChange}
          required
          // error={passwordMatch}
          // helperText="Passwords do not match."
        /> */}
        <Button
          className="register-button"
          variant="contained"
          color="primary"
          type="submit"
        >
          Register!
        </Button>
      </form>
    </Paper>
  );
}

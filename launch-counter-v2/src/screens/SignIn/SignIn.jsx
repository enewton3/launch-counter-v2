import { Button, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexFlow: "column wrap",
  },
}));

export default function SignIn(props) {
  const classes = useStyles();
  const { handleLogin } = props;
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(formData);
  };

  return (
    <Paper className={classes.root} elevation={3}>
      <form
        className={classes.form}
        noValidate
        autoComplete="on"
        onSubmit={(e) => handleSubmit(e)}
      >
        <TextField
          className="login-input"
          variant="filled"
          label="Username"
          name="username"
          type="username"
          autoFocus={true}
          required
          value={formData.username}
          onChange={handleChange}
          color="primary"
        />
        <TextField
          className="login-input"
          variant="filled"
          label="Password"
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={handleChange}
          color="primary"
        />
        <Button
          className="login-button"
          type="submit"
          label="Login!"
          variant="contained"
          color="primary"
        >
          Login!
        </Button>
      </form>
    </Paper>
  );
}

import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import firebase from "../../../config/firebase";

const styles = theme => ({
  margin: {
    margin: theme.spacing(5)
  },
  padding: {
    padding: theme.spacing(3)
  }
});

class Register extends React.Component {
  state = {
    email: "",
    password: ""
  };
  handleChangeText = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleRegisterSubmit = () => {
    const { email, password } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log("success: ", res);
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode, errorMessage);
      });
  };
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.padding}>
        <div className={classes.margin}>
          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Typography gutterBottom variant="h5" component="h2">
              Login
            </Typography>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <EmailIcon />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="email"
                label="Email"
                type="email"
                fullWidth
                autoFocus
                required
                onChange={this.handleChangeText}
              />
            </Grid>
          </Grid>
          <Grid container spacing={8} alignItems="flex-end">
            <Grid item>
              <LockOpenIcon />
            </Grid>
            <Grid item md={true} sm={true} xs={true}>
              <TextField
                id="password"
                label="Password"
                type="password"
                fullWidth
                required
                onChange={this.handleChangeText}
              />
            </Grid>
          </Grid>

          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
              onClick={this.handleRegisterSubmit}
            >
              Register
            </Button>
          </Grid>
        </div>
      </Paper>
    );
  }
}

export default withStyles(styles)(Register);

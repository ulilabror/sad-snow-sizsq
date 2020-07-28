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

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: theme.spacing.unit
  }
});

class Register extends React.Component {
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
              />
            </Grid>
          </Grid>

          <Grid container justify="center" style={{ marginTop: "10px" }}>
            <Button
              variant="outlined"
              color="primary"
              style={{ textTransform: "none" }}
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

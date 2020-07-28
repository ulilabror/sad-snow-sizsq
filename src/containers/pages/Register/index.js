import React from "react";
import {
  Paper,
  withStyles,
  Grid,
  TextField,
  Button,
  Typography
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";
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
          <Grid container spacing={8} alignItems="flex-end">
            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Register Page
              </Typography>
            </Grid>
            <Grid item>
              <Face />
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
              <Fingerprint />
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
          <Grid container alignItems="center" justify="space-between">
            <Grid item>
              <Button
                disableFocusRipple
                disableRipple
                style={{ textTransform: "none" }}
                variant="text"
                color="primary"
              >
                Have account? Login!
              </Button>
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

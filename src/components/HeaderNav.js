import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./componentStyles/HeaderNavStyle";


export default function Header() {
  const classes = useStyles();

  // Returning header
  return (
    <div>
      <AppBar color="secondary">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Typography variant="h5" className={classes.titleText} color="primary">
              Curetrax TODO
            </Typography>
          </Box>
          <Button className={classes.button} disableRipple>
            <Link
              to="/"
              className={classes.buttonText}
              style={{ textDecoration: "none" }}
            >
              ToDo
            </Link>
          </Button>
          <Button className={classes.button} disableRipple>
            <Link
              to="/history"
              className={classes.buttonText}
              style={{ textDecoration: "none" }}
            >
              History
            </Link>
          </Button>
          <Button className={classes.buttonEnd} disableRipple>
          <Link
              to="/chart"
              className={classes.buttonText}
              style={{ textDecoration: "none" }}
            >
              Chart
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar className={classes.toolMargin}/>
    </div>
  );
}

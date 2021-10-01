import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Button, makeStyles, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

// Styling for header 
const useStyles = makeStyles({
  buttonEnd: {
    marginRight: "5%",
  },
  button: {
    marginRight: "7%",
  },
  buttonText: {
    fontWeight: 800,
    color: "#2B3856",
    fontSize: '1.2rem'
  },
  titleText: {
    fontWeight: 800,
    color: "#2B3856",
    fontSize: '2rem'
  },
  toolMargin: {
      marginBottom: "2%"
  }
});


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
              to="/cureTask"
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

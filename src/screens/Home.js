import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Header from "../components/HeaderNav";
import { Container } from "@material-ui/core";
import AddTODO from "../components/AddTODO";
import ToDoMapHome from "../components/ToDoMap";


// Styling for MaterialUI components
const useStyles = makeStyles({
  back: {
    minHeight: "100vh",
    minWidth: "100vw",
    backgroundColor: "#2B3856",
    paddingBottom: "2rem",
  },

  outerDiv: {
    display: "flex",
    justifyContent: "center",
  },

  mainDiv: {
    backgroundColor: "#D6D6D7",
    borderRadius: "8px",
    marginTop: "4vh",
    marginBottom: "2vh",
    minWidth: "50vw",
    display: "flex",
    flexDirection: "column",
  },

  countText: {
    fontWeight: 600,
    fontSize: "1.2vw",
    color: "white",
    marginLeft: "57vw",
  },

});

// Returns 'TODO' page
export default function Home(props) {
  const classes = useStyles();

  return (
    <Container className={classes.back}>
      <Header />

      <div className={classes.outerDiv}>
        <div className={classes.mainDiv}>
          <AddTODO
            handleAdd={props.handleAdd}
            textEvent={props.textEvent}
            onChange={props.onChange}
            labelText={props.labelText}
          />
          <ToDoMapHome items={props.data}/>
        </div>
      </div>
      <Typography className={classes.countText}>
        How many things to do: {props.activeLength}
      </Typography>
    </Container>
  );
}

import React, { useContext, useEffect } from "react";
import Header from "../components/HeaderNav";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ListContext from "../ListContext";
import ToDoMapHistory from "../components/ToDoMapHistory";

// Styling for history page and task lists
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
    margin: "2vw",
    minHeight: "28vh",
    marginBottom: "2vh",
    minWidth: "40vw",
    display: "flex",
    flexDirection: "column",
  },

  mainText: {
    fontWeight: 700,
    fontSize: "1.25vw",
    color: "#2B3856",
    margin: "1rem",
  },
});


export default function History() {
  const classes = useStyles();

  // Retrieving context for deleted and completed items
  const { deletedItems, completedItems } = useContext(ListContext);

  // Retrieves updated deleted and completed task list on every render
  useEffect(() => {
    deletedItems.current = getDeletedTasks();
    completedItems.current = getAddedTasks();
  });

  // Retrieving deleted task list from local storage
  function getDeletedTasks() {
    let deletedJson = JSON.parse(localStorage.getItem("deletedTasks"));
    if (deletedJson === null) {
      deletedJson = [];
    }
    return deletedJson;
  }

  // Retrieving completed task list from local storage
  function getAddedTasks() {
    let addedJson = JSON.parse(localStorage.getItem("completedTasks"));
    if (addedJson === null) {
      addedJson = [];
    }
    return addedJson;
  }


  // Returning completed and deleted task lists
  // Also assigning type for each list for use in ToDoMapHistory component
  return (
    <Container className={classes.back}>
      <Header />
      <div className={classes.outerDiv}>
        <div className={classes.mainDiv}>
          <Typography className={classes.mainText}>Completed Tasks</Typography>
          <ToDoMapHistory items={completedItems.current} type="completed"/>
        </div>
        <div className={classes.mainDiv}>
          <Typography className={classes.mainText}>Deleted Tasks</Typography>
          <ToDoMapHistory items={deletedItems.current} type="deleted"/>
        </div>
      </div>
    </Container>
  );
}

import React from "react";
import { Card, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/DeleteOutline";

// Styling for todo item
const useStyle = makeStyles({
  card: {
    backgroundColor: "#2B3856",
    padding: "1rem",
    display: "flex",
    flexDirection: "row",
    marginBottom: "1rem",
  },

  toDoText: {
    color: "white",
    alignSelf: "center",
    flex: "3",
    fontWeight: "500",
  },

  checkIcon: {
    marginLeft: "auto",
    color: "white",
  },
});

export default function ToDoItem(props) {
  const classes = useStyle();

  // Return todo task card
  return (
    <Card className={classes.card}>
      <Typography className={classes.toDoText} noWrap>
        {props.todo}
      </Typography>
      <IconButton className={classes.checkIcon} onClick={props.complete}>{props.check}</IconButton>
      <IconButton
        className={classes.checkIcon}
        onClick={props.delete}
      >
        <Delete />
      </IconButton>
    </Card>
  );
}

import React from "react";
import { Card, Typography } from "@material-ui/core";
import { useStyle } from "./componentStyles/ToDoItemStyle";
import { IconButton } from "@material-ui/core";
import Delete from "@material-ui/icons/DeleteOutline";


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

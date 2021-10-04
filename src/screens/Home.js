import React, { useContext, useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import Header from "../components/HeaderNav";
import { Container } from "@material-ui/core";
import AddTODO from "../components/AddTODO";
import ToDoMapHome from "../components/ToDoMap";
import { useStyles } from "./screenStyles/HomeStyle";
import ListContext from "../ListContext";

// Returns 'TODO' page
export default function Home(props) {
  // useState for user input and input label
  const [textEvent, setTextEvent] = useState("");
  const [labelText, setLabelText] = useState("");

  // For styling
  const classes = useStyles();

  // Retrieving context from parent for render update and active list length
  const { childUpdate, setChildUpdate, active } = useContext(ListContext);

  // Updating label text every time childUpdate changes (every add or delete)
  useEffect(() => {
    if (active.length === 0) {
      setLabelText("Add your first task!");
    } else {
      setLabelText("Add another task!");
    }
  }, [childUpdate, active.length]);

  // Adds event to active tasks list and re-renders tasks for display
  function handleAdd(textEvent) {
    // Checking for empty input or just spaces
    if (!textEvent.replace(/\s/g, "").length) {
      setLabelText("Please enter a valid task*");
      setTextEvent("");

      // Handles adding of tasks to local storage and re-rendering of display
      // Retrieves local storage, appends new task, sets local storage, updates state
    } else if (textEvent) {
      let json = JSON.parse(localStorage.getItem("tasks"));
      if (json === null) {
        json = [];
      }
      let task = {
        todo: textEvent,
      };
      json.push(task);
      localStorage.setItem("tasks", JSON.stringify(json));
      setChildUpdate(!childUpdate);

      setTextEvent("");
    }
  }

  return (
    <Container className={classes.back}>
      <Header />

      <div className={classes.outerDiv}>
        <div className={classes.mainDiv}>
          <AddTODO
            handleAdd={() => {
              handleAdd(textEvent);
            }}
            textEvent={textEvent}
            onChange={(e) => {
              setTextEvent(e.target.value);
            }}
            labelText={labelText}
          />
          <ToDoMapHome items={props.data} />
          <div className={classes.countDiv}>
            <Typography className={classes.countText}>
              How many things to do: {props.activeLength}
            </Typography>
            <div className={classes.countDivPlace}></div>
          </div>
        </div>
      </div>
    </Container>
  );
}

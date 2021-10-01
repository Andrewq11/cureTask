import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { makeStyles } from "@material-ui/core";
import ListContext from "../ListContext";
import Check from "@material-ui/icons/CheckBoxOutlined"

// Styling for list of tasks on home page
const useStyle = makeStyles({
  list: {
    marginLeft: "1rem",
    marginRight: "3.5rem",
  },
});

export default function ToDoMapHome(props) {
  const classes = useStyle();

  // Retrieving context from parent component (Main.js)
  const { active, setActive, childUpdate, setChildUpdate } =
    useContext(ListContext);

  // Adding task to completed list of tasks in local storage
  // Setting state of active to re-render home page without task
  function addHome(index) {
    let completeJson = JSON.parse(localStorage.getItem("completedTasks"));
    if (completeJson === null) {
      completeJson = [];
    }

    const completeItem = active.splice(index, 1);
    completeJson.push(completeItem);
    localStorage.setItem("completedTasks", JSON.stringify(completeJson));

    setActive(active);
    localStorage.setItem("tasks", JSON.stringify(active));
    setChildUpdate(!childUpdate);
  }

  // Adding task to deleted task list and updating state of active for re-render
  function deleteHome(index) {
    let deletedJson = JSON.parse(localStorage.getItem("deletedTasks"));
    if (deletedJson === null) {
      deletedJson = [];
    }

    const deletedItem = active.splice(index, 1);
    deletedJson.push(deletedItem);
    localStorage.setItem("deletedTasks", JSON.stringify(deletedJson));

    setActive(active);
    localStorage.setItem("tasks", JSON.stringify(active));
    setChildUpdate(!childUpdate);
  }

  // Returning list of active tasks
  return (
    <ul className={classes.list}>
      {props.items.map((item, index) => (
        <ToDoItem
          key={index}
          todo={item.todo}
          check={<Check/>}
          delete={() => {
            deleteHome(index);
          }}
          complete={() => {
            addHome(index);
          }}
        />
      ))}
    </ul>
  );
}

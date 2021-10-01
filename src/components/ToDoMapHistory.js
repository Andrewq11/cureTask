import React, { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { makeStyles } from "@material-ui/core";
import ListContext from "../ListContext";

// Styling for each task list
const useStyle = makeStyles({
  list: {
    marginLeft: "1rem",
    marginRight: "3.5rem",
  },
});

export default function ToDoMapHistory(props) {
  const classes = useStyle();

  // Retrieving context for deleted and completed tasks
  // Also getting childUpdate for re-retrieval of lists in Main.js
  const { deletedItems, setChildUpdate, childUpdate, completedItems } =
    useContext(ListContext);

  // Permanently deleting item from corresponding list
  function finalDeleteTask(index, type) {
    // type passed in History.js call of ToDoMapHome
    // Deletes item from deletedTasks in localStorage permanently
    if (type === "deleted") {
      deletedItems.current.splice(index, 1);
      localStorage.setItem(
        "deletedTasks",
        JSON.stringify(deletedItems.current)
      );
      setChildUpdate(!childUpdate);

      // type passed in History.js call of ToDoMapHome
      // Deletes item from completedTasks in localStorage permanently
    } else if (type === "completed") {
      completedItems.current.splice(index, 1);
      localStorage.setItem(
        "completedTasks",
        JSON.stringify(completedItems.current)
      );
      setChildUpdate(!childUpdate);
    }
  }

  // Renders list for history page
  return (
    <ul className={classes.list}>
      {props.items.map((item, index) => (
        <ToDoItem
          key={index}
          type={props.type}
          todo={item[0].todo}
          delete={() => {
            finalDeleteTask(index, props.type);
          }}
        />
      ))}
    </ul>
  );
}

export { ToDoMapHistory };

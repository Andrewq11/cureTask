import React from "react";
import { useState, useEffect, useRef } from "react";
import Home from "../screens/Home";
import { HashRouter as Switch, Route } from "react-router-dom";
import History from "../screens/History";
import { ListProvider } from "../ListContext";
import Chart from "../screens/Chart";

export default function Main() {
  // useState for task lists and notifying of child component updates
  const [active, setActive] = useState([]);
  const [childUpdate, setChildUpdate] = useState(false);
  const deletedItems = useRef([]);
  const completedItems = useRef([]);

  // Passed as context
  const activeList = {
    active,
    setActive,
    childUpdate,
    setChildUpdate,
    deletedItems,
    completedItems,
  };

  // Runs on initial render of home page to retrieve each task list and also
  // runs when child components update
  useEffect(() => {
    renderActiveList();
    deletedItems.current = renderDeletedList();
    completedItems.current = renderCompletedList();
  }, [childUpdate, active.length]);


  // Renders tasks for home page
  function renderActiveList() {
    let json = JSON.parse(localStorage.getItem("tasks"));
    if (json === null) {
      json = [];
    }
    setActive(json);
  }


  // Renders tasks for completed list on history page
  function renderCompletedList() {
    let addedJson = JSON.parse(localStorage.getItem("completedTasks"));
    if (addedJson === null) {
      addedJson = [];
    }
    return addedJson;
  }


  // Render tasks for deleted list on history page
  function renderDeletedList() {
    let deletedJson = JSON.parse(localStorage.getItem("deletedTasks"));
    if (deletedJson === null) {
      deletedJson = [];
    }
    return deletedJson;
  }

  // Context passed for child components
  return (
    <Switch>
      <ListProvider value={activeList}>
        <Route path="/" exact>
          <Home
            data={active}
            activeLength={active.length}
          />
        </Route>
        <Route path="/history">
          <History />
        </Route>
        <Route path="/chart">
          <Chart />
        </Route>
      </ListProvider>
    </Switch>
  );
}

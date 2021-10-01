import React from "react";
import { Typography } from "@material-ui/core";
import Header from "../components/HeaderNav";
import { Container } from "@material-ui/core";
import AddTODO from "../components/AddTODO";
import ToDoMapHome from "../components/ToDoMap";
import { useStyles } from "./screenStyles/HomeStyle";

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

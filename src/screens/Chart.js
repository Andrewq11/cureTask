import React, { useContext, useEffect } from "react";
import Header from "../components/HeaderNav";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import ListContext from "../ListContext";

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
    padding: "1rem",
    minHeight: "70vh",
    minWidth: "70vw",
  },

  secDiv: {
    borderRadius: "8px",
    marginTop: "4vh",
    minHeight: "70vh",
    marginBottom: "2vh",
    display: "flex",
    alignItems: "center",
  },

  mainText: {
    fontWeight: 700,
    fontSize: "2vw",
    color: "white",
    margin: "1rem",
  },
});

export default function Chart() {
  const classes = useStyles();
  const { deletedItems, completedItems } = useContext(ListContext);
  let chartActive = null;

  

  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.fontFamily = "Montserrat";
    chart.minWidth = "50px"

    console.log('running')

    let title = chart.titles.create();
    title.text = "Completed Tasks vs. Deleted Tasks";
    title.fontWeight = 500;
    title.fontSize = "4vh";
    title.align = "center";
    title.marginTop = '10rem';
    
    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "count";
    series.dataFields.category = "TaskType";

    chart.data = [
      {
        TaskType: "Completed Items",
        count: completedItems.current.length,
      },
      {
        TaskType: "Deleted Items",
        count: deletedItems.current.length,
      },
    ];

    chart.legend = new am4charts.Legend();

    return () => {
      chart.dispose();
    };
  },);

  if (completedItems.current.length + deletedItems.current.length === 0) {
    chartActive = (
      <div className={classes.secDiv}>
        <Typography className={classes.mainText}>
          Add or delete items in the History Tab to see your chart!
        </Typography>
      </div>
    );
  } else {
    chartActive = <div className={classes.mainDiv} id="chartdiv"></div>;
  }

  return (
    <Container className={classes.back}>
      <Header />
      <div className={classes.outerDiv}>{chartActive}</div>
    </Container>
  );
}

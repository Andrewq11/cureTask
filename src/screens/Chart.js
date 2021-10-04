import React, { useContext, useEffect } from "react";
import Header from "../components/HeaderNav";
import { Container, Typography } from "@material-ui/core";
import { useStyles } from "./screenStyles/ChartStyle";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import ListContext from "../ListContext";


export default function Chart() {
  const classes = useStyles();

  // Retrieving context for completed and deleted tasks list
  const { deletedItems, completedItems } = useContext(ListContext);

  // Initializing variable for assignment to JSX below
  let chartActive = null;
  let chartSize = null;
  let pieLabels = null;
  let tickShow = null;

  if (window.innerWidth < 430) {
    tickShow = true;
    pieLabels = "";
    chartSize = '1.6vh';
  } else {
    tickShow = false;
    pieLabels = "{value.percent.formatNumber('#.0')}%";
    chartSize = '4vh';
  }

  // Handling chart generation and disposal
  useEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.PieChart);
    chart.fontFamily = "Montserrat";
    chart.minWidth = '500px'

    // Styling for chart
    let title = chart.titles.create();
    title.text = "Completed Tasks vs. Deleted Tasks";
    title.fontWeight = 500;
    title.fontSize = chartSize;
    title.textAlign= 'center'
    title.marginTop = '10rem';
    
    let series = chart.series.push(new am4charts.PieSeries());
    series.ticks.template.disabled = tickShow;
    series.labels.template.text = pieLabels;
    series.dataFields.value = "count";
    series.dataFields.category = "TaskType";

    // Chart data
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

    // Legend for chart
    chart.legend = new am4charts.Legend();
    chart.legend.align = 'center'

    // Disposing of chart to save resources on component unmount
    return () => {
      chart.dispose();
    };
  },);

  // Returns chart or text depending on number of tasks in completed and 
  // deleted tasks list
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

  // Returns chart or text
  return (
    <Container className={classes.back}>
      <Header />
      <div className={classes.outerDiv}>{chartActive}</div>
    </Container>
  );
}

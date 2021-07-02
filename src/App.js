// STEP 1 - Include Dependencies
// Include react
import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionPieCharts from "fusioncharts";

// Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionPieCharts, Column2D, FusionTheme);

// STEP 2 - Chart Data
const chartData = [
  {
    label: "Revenue",
    value: "290",
  },
  {
    label: "Food",
    value: "260",
  },
  {
    label: "Beverages",
    value: "180",
  },
  {
    label: "Others",
    value: "140",
  },
  {
    label: "No of guests",
    value: "115",
  },
  {
    label: "Guests outside hotel",
    value: "100",
  },
];

// STEP 3 - Creating the JSON object to store the chart configurations
const PiechartConfigs = {
  type: "pie3d", // The chart type
  width: "800", // Width of the chart
  height: "500", // Height of the chart

  dataFormat: "json", // Data type

  dataSource: {
    // Chart Configuration
    chart: {
      //Set the chart caption
      caption: "Data Reports Chart",
      //Set the chart subcaption
      subCaption: "In MMbbl = One Million barrels",
      //Set the x-axis name
      xAxisName: "Country",
      //Set the y-axis name
      yAxisName: "Reserves (MMbbl)",
      numberSuffix: "K",
      //Set the theme for your chart
      theme: "fusion",
    },
    // Chart Data
    data: chartData,
  },
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class Piechart extends React.Component {
  render() {
    return <ReactFC {...PiechartConfigs} />;
  }
}

export default Piechart;

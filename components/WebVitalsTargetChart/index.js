// UI Components
import { Chart } from "primereact/chart";

// Components
import SectionTitle from "../SectionTitle";

const METRIC_OPTIONS = [
  {
    label: "FAST",
    color: "#A0D468",
  },
  {
    label: "AVERAGE",
    color: "#FFCE54",
  },
  {
    label: "SLOW",
    color: "#ED5565",
  },
];

let chartOptions = {
  legend: {
    labels: {
      fontColor: "#495057",
    },
  },
  scales: {
    xAxes: [
      {
        ticks: {
          fontColor: "#495057",
          beginAtZero: true,
        },
      },
    ],
    yAxes: [
      {
        ticks: {
          fontColor: "#495057",
        },
      },
    ],
  },
};

const createDataset = (percentile, target) => [
  {
    label: "Actual",
    type: "horizontalBar",
    backgroundColor: "#EC407A",
    data: [percentile],
  },
  {
    label: "Target",
    type: "horizontalBar",
    backgroundColor: "#AB47BC",
    data: [target],
  },
];

const StackedBarChart = ({ metric, target, metricName }) => {
  const { percentile } = metric;

  const chartData = {
    labels: [metricName],
    backgroundColor: ["#EC407A", "#AB47BC"],
    datasets: createDataset(percentile, target),
  };

  console.log(chartData);

  return <Chart type="horizontalBar" data={chartData} options={chartOptions} />;
};

export default StackedBarChart;

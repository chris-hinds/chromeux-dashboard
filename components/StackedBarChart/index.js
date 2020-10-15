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

let stackedOptions = {
  tooltips: {
    mode: "index",
    intersect: false,
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        stacked: true,
        ticks: {
          fontColor: "#495057",
        },
        gridLines: {
          color: "#ebedef",
        },
      },
    ],
    yAxes: [
      {
        stacked: true,
        ticks: {
          display: false,
        },
        gridLines: {
          color: "#ebedef",
        },
      },
    ],
  },
  legend: {
    labels: {
      fontColor: "#495057",
    },
  },
};

const createDataset = (data) => {
  let dataset = [];
  data.map((value, index) =>
    dataset.push({
      type: "horizontalBar",
      label: METRIC_OPTIONS[index].label,
      backgroundColor: METRIC_OPTIONS[index].color,
      data: [value.proportion.toFixed(3) * 100],
    })
  );

  return dataset;
};

const StackedBarChart = ({ metric, metricName }) => {
  const { distributions } = metric;

  const chartData = {
    labels: [metricName],
    datasets: createDataset(distributions),
  };

  return (
    <Chart type="horizontalBar" data={chartData} options={stackedOptions} />
  );
};

export default StackedBarChart;

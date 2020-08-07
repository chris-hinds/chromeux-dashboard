import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
  Legend,
} from "recharts";

// ui elements
import { Box, Heading } from "@chakra-ui/core";

const MetricDetails = (name) => {
  switch (name) {
    case "largest_contentful_paint":
      return {
        name: "Largest Contentful Paint",
        shortName: "LCP",
      };
      break;
    case "cumulative_layout_shift":
      return {
        name: "Cumulative Layout Shift",
        shortName: "CLS",
      };
      break;
    case "first_contentful_paint":
      return {
        name: "First Contentful Paint",
        shortName: "FCP",
      };
      break;
    case "first_input_delay":
      return {
        name: "First Input Delay",
        shortName: "FID",
      };
      break;
    default:
      return {
        name: name,
        shortName: name,
      };
  }
};

const renderLegend = (props) => {
  const { payload } = props;
  const spaces = "    ";
  return (
    <ul>
      {payload.map((entry, index) => {
        console.log(entry);
        return <li key={`item-${index}`}>{entry.payload.label}</li>;
      })}
    </ul>
  );
};

const Histogram = ({ name, data }) => {
  const summary = MetricDetails(name);
  const COLORS = ["#00C49F", "#FFBB28", "#ff4263"];

  return (
    <Box>
      <Heading size="sm">{summary.name}</Heading>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              label={(entry) => entry.name}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            {/* <Legend
              content={renderLegend}
              layout="horizontal"
              verticalAlign="middle"
              align="bottom"
            /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default Histogram;

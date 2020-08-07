import { ResponsiveContainer, PieChart, Pie, Sector, Cell } from "recharts";

// ui elements
import { Box, Heading } from "@chakra-ui/core";

const Histogram = ({ name, data }) => {
  const COLORS = ["#00C49F", "#FFBB28", "#ff4263"];

  return (
    <Box>
      <Heading>{name}</Heading>
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
            >
              {data.map((entry, index) => (
                <Cell fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Box>
  );
};

export default Histogram;

import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from "@chakra-ui/core";

const MetricDetails = (name, data) => {
  const {
    percentiles: { p75 },
  } = data;

  switch (name) {
    case "largest_contentful_paint":
      return {
        name: "Largest Contentful Paint",
        shortName: "LCP",
        unit: "ms",
        helpText: `75% of users experienced a LCP of less than ${p75}ms`,
      };
      break;
    case "cumulative_layout_shift":
      return {
        name: "Cumulative Layout Shift",
        shortName: "CLS",
        unit: null,
        helpText: `75% of users experienced a CLS score of less than ${p75}`,
      };
      break;
    case "first_contentful_paint":
      return {
        name: "First Contentful Paint",
        shortName: "FCP",
        unit: "ms",
        helpText: `75% of users experienced an FCP of less than ${p75}ms`,
      };
      break;
    case "first_input_delay":
      return {
        name: "First Input Delay",
        shortName: "FID",
        unit: "ms",
        helpText: `75% of users experienced a FID of less than ${p75}ms`,
      };
      break;
    default:
      return {
        name: name,
        shortName: name,
        unit: "ms",
        helpText: `75% of users experienced an ${name} of less than ${p75}ms`,
      };
  }
};

const Metric = ({ name, data }) => {
  const {
    percentiles: { p75 },
  } = data;
  const summary = MetricDetails(name, data);
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      rounded="lg"
      overflow="hidden"
      p="3"
      marginBottom="3"
    >
      <Stat>
        <StatLabel>{summary.name}</StatLabel>
        <StatNumber>
          {p75}
          {summary.unit}
        </StatNumber>
        <StatHelpText>{summary.helpText}</StatHelpText>
      </Stat>
    </Box>
  );
};

export default Metric;

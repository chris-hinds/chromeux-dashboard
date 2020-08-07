import { useRouter } from "next/router";

// ui elements
import { Divider, Heading, SimpleGrid } from "@chakra-ui/core";

// components
import Metric from "../../components/Metric";
import Histogram from "../../components/Histogram";

const RenderMetrics = ({ data: { metrics } }) => {
  return Object.keys(metrics).map((metric) => {
    return <Metric name={metric} data={metrics[metric]} key={`id-${metric}`} />;
  });
};

const getPercentage = (value) => {
  const roundUp = value.toFixed(2);
  const percentage = parseInt(roundUp.replace(/^0./, ""));

  console.log(typeof percentage);

  return percentage;
};

const RenderHistograms = ({ data: { metrics } }) => {
  return Object.keys(metrics).map((metric) => {
    const { histogram } = metrics[metric];
    let histogramData = [];

    histogram.map((group) => {
      histogramData.push({
        name: `${getPercentage(group.density)}%`,
        value: group.density,
        label: `> ${group.start}`,
      });
    });
    return (
      <Histogram name={metric} data={histogramData} key={`id-${metric}`} />
    );
  });
};

const TldPage = ({ cruxData }) => {
  const router = useRouter();
  const { tld } = router.query;

  const { record } = cruxData;

  return (
    <>
      <Heading as="h1" size="2xl">
        {tld}
      </Heading>
      <Heading as="h2" size="md">
        CRUX Report for: {record.key.url}
      </Heading>
      <Divider />
      <Heading size="sm" marginY="6">
        Summary of the 75th percentile of users
      </Heading>
      <SimpleGrid minChildWidth="220px" spacing={10}>
        <RenderMetrics data={record} />
      </SimpleGrid>

      <Heading size="sm" marginY="6">
        Histograms of user experiences for a given metric
      </Heading>
      <SimpleGrid minChildWidth="220px" spacing={10}>
        <RenderHistograms data={record} />
      </SimpleGrid>
    </>
  );
};

export async function getServerSideProps({ query }) {
  const res = await fetch(`${process.env.APP_API_ENDPOINT}/site/${query.tld}`);
  const json = await res.json();

  return {
    props: {
      cruxData: json,
    },
  };
}

export default TldPage;

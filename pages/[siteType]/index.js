import { useRouter } from "next/router";

// ui elements
import { Divider, Heading, SimpleGrid, useTheme } from "@chakra-ui/core";

// components
import Metric from "../../components/Metric";
import Histogram from "../../components/Histogram";
import RecordKey from "../../components/RecordKey";

const RenderMetrics = ({ data: { metrics } }) => {
  return Object.keys(metrics).map((metric) => {
    return <Metric name={metric} data={metrics[metric]} key={`id-${metric}`} />;
  });
};

const getPercentage = (value) => {
  const roundUp = value.toFixed(2);
  const percentage = parseInt(roundUp.replace(/^0./, ""));

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

const Error = ({ error }) => (
  <Heading as="h3" size="md">
    {error}
  </Heading>
);

const TldPage = ({ cruxData }) => {
  console.log(cruxData);
  const router = useRouter();
  const { url } = router.query;

  const { record, error } = cruxData;

  return (
    <>
      <Heading as="h1" size="2xl">
        {url}
      </Heading>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <Heading as="h2" size="md">
            CRUX Report for: {record.key.url || record.key.origin}
          </Heading>
          <RecordKey data={record.key} />
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
      )}
    </>
  );
};

export async function getServerSideProps({ query }) {
  console.log(query);
  const apiPath =
    query.siteType === "origin"
      ? `/origin/?url=${query.url}`
      : `/page/?url=${query.url}`;

  const res = await fetch(`${process.env.APP_API_ENDPOINT}${apiPath}`);
  const json = await res.json();

  return {
    props: {
      cruxData: json,
    },
  };
}

export default TldPage;

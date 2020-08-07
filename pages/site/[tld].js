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

const RenderHistograms = ({ data: { metrics } }) => {
  return Object.keys(metrics).map((metric) => {
    const { histogram } = metrics[metric];
    let histogramData = [];

    histogram.map((group) => {
      console.log(group);
      histogramData.push({
        name: `>= ${group.start}`,
        value: group.density,
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
      <SimpleGrid minChildWidth="220px" spacing={10}>
        <RenderMetrics data={record} />
      </SimpleGrid>

      <RenderHistograms data={record} />
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

import { useRouter } from "next/router";

// ui elements
import { Divider, Heading } from "@chakra-ui/core";

// components
import Metric from "../../components/Metric";

const RenderMetrics = ({ data: { metrics } }) => {
  return Object.keys(metrics).map((metric) => {
    return <Metric name={metric} data={metrics[metric]} key={`id-${metric}`} />;
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
      <RenderMetrics data={record} />
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

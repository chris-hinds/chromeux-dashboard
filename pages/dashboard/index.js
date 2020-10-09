import { useRouter } from "next/router";

// ui elements
import { Divider, Heading, SimpleGrid, useTheme } from "@chakra-ui/core";

// components
import Metric from "../../components/Metric";
import Histogram from "../../components/Histogram";
import RecordKey from "../../components/RecordKey";
import WebVitals from "../../containers/WebVitals";

const Error = ({ error }) => (
  <Heading as="h3" size="md">
    {error}
  </Heading>
);

const LighthouseAudits = ({ audits }) => {
  return <></>;
};

const TldPage = ({ psiData }) => {
  const router = useRouter();
  const { url } = router.query;

  const { lighthouseResult, loadingExperience: webViatlsData, error } = psiData;
  const { audits } = lighthouseResult;

  return (
    <>
      <WebVitals data={webViatlsData} />
    </>
  );
};

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `${process.env.APP_API_ENDPOINT}/psi?url=${query.url}`
  );
  const json = await res.json();

  return {
    props: {
      psiData: json,
    },
  };
}

export default TldPage;

import { useRouter } from "next/router";

// ui elements
import { Divider, Heading, SimpleGrid, useTheme } from "@chakra-ui/core";

// components
import Dashboard from "../../containers/Dashboard";

// data fetching
import fetcher from "../../utilities/fetcher";
import useSWR from "swr";

// ui elements
import { ProgressBar } from "primereact/progressbar";

const SWR_OPTIONS = {
  revalidateOnReconnect: false,
  refreshWhenOffline: false,
  revalidateOnFocus: false,
};

const Error = ({ error }) => (
  <Heading as="h3" size="md">
    {error}
  </Heading>
);

const getApiPath = (url) =>
  `${process.env.NEXT_PUBLIC_PSI_API_BASE_ENDPOINT}?url=${url}&key=${process.env.NEXT_PUBLIC_PSI_API_KEY}`;

const TldPage = ({ pageUrl }) => {
  // const router = useRouter();
  // const { url } = router.query;

  // fetch data
  const apiPath = getApiPath(pageUrl);
  const { data, isValidating, error } = useSWR(apiPath, fetcher, SWR_OPTIONS);

  return (
    <>
      {!data && <ProgressBar mode="indeterminate" />}
      {error && <Error error={"error"} />}
      {data && <Dashboard data={data} />}
    </>
  );
};

export async function getServerSideProps({ query }) {
  return {
    props: {
      pageUrl: query.url,
    },
  };
}

export default TldPage;

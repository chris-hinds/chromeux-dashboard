import fixtureData from "../api/fixtures/mundoPsi.json";

// ui elements
import { Heading } from "@chakra-ui/core";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";

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

const toolbarSearchBar = () => (
  <span className="p-input-icon-left">
    {/* <i className="pi pi-search" />
    <InputText placeholder="Search" /> */}
  </span>
);

const TldPage = ({ pageUrl }) => {
  // const router = useRouter();
  // const { url } = router.query;

  // fetch data
  const apiPath = getApiPath(pageUrl);
  const { data, isValidating, error } = useSWR(apiPath, fetcher, SWR_OPTIONS);

  return (
    <>
      <Toolbar left={toolbarSearchBar} style={{ backgroundColor: "#fff" }} />
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

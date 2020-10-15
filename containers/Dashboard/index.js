import styles from "./Dashboard.module.css";

// ui elements
import { AiOutlineMeh, AiOutlineSmile, AiOutlineFrown } from "react-icons/ai";
import { TabView, TabPanel } from "primereact/tabview";

// components
import WebVitals from "../../containers/WebVitals";
import LoadingExperience from "../../containers/LoadingExperience";
import SectionTitle from "../../components/SectionTitle";

const BADGE_COLOUR = {
  FAST: "#689F38",
  AVERAGE: "#FFC107",
  SLOW: "#D32F2F",
};

const webVitalsStatus = (status) => {
  switch (status) {
    case "FAST":
      return <AiOutlineSmile size="1.5em" color={BADGE_COLOUR[status]} />;
    case "AVERAGE":
      return <AiOutlineMeh size="1.5em" color={BADGE_COLOUR[status]} />;
    default:
      return <AiOutlineFrown size="1.5em" color={BADGE_COLOUR[status]} />;
  }
};

const Dashboard = ({ data }) => {
  const {
    loadingExperience: webViatlsData,
    originLoadingExperience: originWebVitalsData,
    lighthouseResult: lighthouseData,
  } = data;
  const { audits } = lighthouseData;
  const { overall_category: webVitalsScore } = webViatlsData;
  const { "final-screenshot": siteScreenhot } = audits;

  return (
    <div className={styles.dashboardWrapper}>
      <div className="p-d-flex p-flex-direction-row p-jc-between">
        <SectionTitle text="Core Web-Vitals" />
        <div className="p-d-flex p-flex-direction-row p-py-4">
          Wev-Vitals Status
          <div className="p-px-2" color="red">
            {webVitalsStatus(webVitalsScore)}
          </div>
        </div>
      </div>

      <WebVitals data={webViatlsData} image={siteScreenhot} />
      <LoadingExperience
        pageData={webViatlsData}
        originData={originWebVitalsData}
      />
    </div>
  );
};

export default Dashboard;

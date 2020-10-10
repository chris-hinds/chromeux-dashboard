import styles from "./Dashboard.module.css";

// ui elements
import {
  GrStatusCritical,
  GrStatusGood,
  GrStatusWarning,
} from "react-icons/gr";

// components
import WebVitals from "../../containers/WebVitals";
import SectionTitle from "../../components/SectionTitle";

const BADGE_COLOUR = {
  FAST: "#689F38",
  AVERAGE: "#FFC107",
  SLOW: "#D32F2F",
};

const webVitalsStatus = (status) => {
  switch (status) {
    case "FAST":
      return <GrStatusGood size="1.5em" color={BADGE_COLOUR[status]} />;
    case "AVERAGE":
      return <GrStatusWarning size="1.5em" color={"warning"} />;
    default:
      return <GrStatusCritical size="1.5em" color={BADGE_COLOUR[status]} />;
  }
};

const Dashboard = ({ data }) => {
  const {
    loadingExperience: webViatlsData,
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
    </div>
  );
};

export default Dashboard;

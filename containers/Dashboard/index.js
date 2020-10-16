import styles from "./Dashboard.module.css";

// ui elements
import { AiOutlineMeh, AiOutlineSmile, AiOutlineFrown } from "react-icons/ai";
import { TabView, TabPanel } from "primereact/tabview";

// components
import WebVitals from "../../containers/WebVitals";
import WebVitalsTargets from "../../containers/WebVitalsTargets";
import LoadingExperience from "../../containers/LoadingExperience";
import SectionTitle from "../../components/SectionTitle";
import TestStatus from "../../containers/TestStatus";

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
    id,
  } = data;
  const { audits, stackPacks: lighthouseSuggestions } = lighthouseData;
  const { overall_category: webVitalsScore } = webViatlsData;
  const { "final-screenshot": siteScreenhot } = audits;

  return (
    <div className={styles.dashboardWrapper}>
      <TestStatus
        siteImage={siteScreenhot}
        url={id}
        vitalsScore={webVitalsScore}
      />

      <TabView className={styles.dashboardTabview}>
        <TabPanel header="Web Vitals">
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

          <SectionTitle text="Actual Score vs Targets" />
          <WebVitalsTargets
            pageData={webViatlsData}
            originData={originWebVitalsData}
          />

          <SectionTitle text="75th Percentile Experiences" />
          <LoadingExperience
            pageData={webViatlsData}
            originData={originWebVitalsData}
          />
        </TabPanel>
        <TabPanel header="Lighthouse">
          <SectionTitle text="Work In Progress" />
          {JSON.stringify(audits)}
        </TabPanel>
        <TabPanel header="Improvements">
          <SectionTitle text="Work In Progress" />
          {JSON.stringify(lighthouseSuggestions)}
        </TabPanel>
      </TabView>
    </div>
  );
};

export default Dashboard;

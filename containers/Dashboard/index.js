// ui elements

// components
import WebVitals from "../../containers/WebVitals";

const Dashboard = ({ data }) => {
  console.log(data);
  const { lighthouseResult, loadingExperience: webViatlsData } = data;
  const { audits } = lighthouseResult;

  return (
    <>
      <WebVitals data={webViatlsData} />
    </>
  );
};

export default Dashboard;

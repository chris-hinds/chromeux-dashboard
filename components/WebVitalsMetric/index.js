// ui elements
import { Card } from "primereact/card";
import { RiPulseLine } from "react-icons/ri";

const BADGE_COLOUR = {
  FAST: "#689F38",
  AVERAGE: "#FFC107",
  SLOW: "#D32F2F",
};

const WebVitalsMetric = ({ metric, title, shortTitle, unit }) => {
  const { percentile, category } = metric;
  return (
    <Card>
      <div className="p-d-flex p-flex-column p-ai-center">
        <div className="p-mb-4">
          <RiPulseLine color={BADGE_COLOUR[category]} size="2em" />
        </div>
        <div className="p-text-bold" style={{ fontSize: "1.5em" }}>
          {percentile} {unit}
        </div>
        <div style={{ fontSize: "0.8em" }}>{shortTitle}</div>
        <div
          className="p-text-bold p-mt-4"
          style={{ color: BADGE_COLOUR[category] }}
        >
          {category}
        </div>
      </div>
    </Card>
  );
};

export default WebVitalsMetric;

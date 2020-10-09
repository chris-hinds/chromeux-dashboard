import { Card } from "primereact/card";

const BADGE_COLOUR = {
  FAST: "#689F38",
  AVERAGE: "#FFC107",
  SLOW: "#D32F2F",
};

const Spacer = ({ category }) => (
  <span
    style={{
      width: "100%",
      height: "8px",
      display: "block",
      backgroundColor: BADGE_COLOUR[category],
    }}
  ></span>
);

const WebVitalsMetric = ({ metric, title, shortTitle, unit }) => {
  const { percentile, category } = metric;
  return (
    <Card title={shortTitle}>
      <div className="p-text-right p-text-bold" style={{ fontSize: "1.5em" }}>
        {percentile} {unit}
      </div>
      <Spacer category={category} />
    </Card>
  );
};

export default WebVitalsMetric;

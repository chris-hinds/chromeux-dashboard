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

const cardHeader = (image) => (
  <img alt="Website Screenshot" src={image} width="100%" />
);

const WebVitalsScore = ({ title, score, image }) => {
  return (
    <Card title={title} header={cardHeader(image.details.data)}>
      <div className="p-text-center p-text-bold" style={{ fontSize: "1.5em" }}>
        {score}
      </div>
      <Spacer category={score} />
    </Card>
  );
};

export default WebVitalsScore;

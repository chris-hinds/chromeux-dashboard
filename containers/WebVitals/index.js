// Components
import WebVitalsMetric from "../../components/WebVitalsMetric";

const SUPPORTED_METRICS = [
  "FIRST_INPUT_DELAY_MS",
  "LARGEST_CONTENTFUL_PAINT_MS",
  "FIRST_CONTENTFUL_PAINT_MS",
  "CUMULATIVE_LAYOUT_SHIFT_SCORE",
];

const METRIC_INFO = {
  FIRST_INPUT_DELAY_MS: {
    title: "First Input Delay",
    shortTitle: "FID",
    unit: "ms",
  },
  LARGEST_CONTENTFUL_PAINT_MS: {
    title: "Largest Contentful Paint",
    shortTitle: "LCP",
    unit: "ms",
  },
  FIRST_CONTENTFUL_PAINT_MS: {
    title: "First Contentful Paint",
    shortTitle: "FCP",
    unit: "ms",
  },
  CUMULATIVE_LAYOUT_SHIFT_SCORE: {
    title: "Cumulative Layout Shift",
    shortTitle: "CLS",
    unit: null,
  },
};

const RenderMetrics = ({ metrics }) => {
  return SUPPORTED_METRICS.map((metric) => (
    <div className="p-col-6">
      <WebVitalsMetric
        metric={metrics[metric]}
        title={METRIC_INFO[metric].title}
        shortTitle={METRIC_INFO[metric].shortTitle}
        unit={METRIC_INFO[metric].unit}
      />
    </div>
  ));
};

const WebVitals = ({ data }) => {
  const { metrics, overall_category: score } = data;
  return (
    <div className="p-grid nested-grid">
      <div className="p-col-8">
        <div className="p-grid">
          <RenderMetrics metrics={metrics} />
        </div>
      </div>
      <div className="p-col-4">{score}</div>
    </div>
  );
};

export default WebVitals;

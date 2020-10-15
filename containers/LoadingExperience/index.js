// UI Components
import { Card } from "primereact/card";

// Components
import StackedBarChart from "../../components/StackedBarChart";
import SectionTitle from "../../components/SectionTitle";

const LoadingExperience = ({ pageData, originData }) => {
  const { metrics: pageMetrics } = pageData;
  const { metrics: originMetrics } = originData;
  const {
    CUMULATIVE_LAYOUT_SHIFT_SCORE: pageCLS,
    LARGEST_CONTENTFUL_PAINT_MS: pageLCP,
    FIRST_CONTENTFUL_PAINT_MS: pageFCP,
    FIRST_INPUT_DELAY_MS: pageFID,
  } = pageMetrics;

  const {
    CUMULATIVE_LAYOUT_SHIFT_SCORE: cls,
    LARGEST_CONTENTFUL_PAINT_MS: lcp,
    FIRST_CONTENTFUL_PAINT_MS: fcp,
    FIRST_INPUT_DELAY_MS: fid,
  } = originMetrics;

  return (
    <div className="p-grid nested-grid">
      <div className="p-col-12">
        <div className="p-grid">
          <div className="p-col-6">
            <SectionTitle text="CLS" />
            <Card>
              <StackedBarChart metric={pageCLS} metricName="CLS" />
            </Card>
          </div>
          <div className="p-col-6">
            <SectionTitle text="LCP" />
            <Card>
              <StackedBarChart metric={pageLCP} metricName="LCP" />
            </Card>
          </div>
          <div className="p-col-6">
            <SectionTitle text="FCP" />
            <Card>
              <StackedBarChart metric={pageFCP} metricName="FCP" />
            </Card>
          </div>
          <div className="p-col-6">
            <SectionTitle text="FID" />
            <Card>
              <StackedBarChart metric={pageFID} metricName="FID" />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingExperience;

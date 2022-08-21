import { Analyse as AnalyzeType } from "../services/types/analyse";
import BarChart from "../components/chart/barChart";
import { Card } from "react-bootstrap";
import LineChart from "../components/chart/lineChart";

type Props = {
  publishAnalyse: AnalyzeType;
  sentimentAnalyse: AnalyzeType;
  languageAnalyse: AnalyzeType;
};

export const Analyse = ({
  publishAnalyse,
  sentimentAnalyse,
  languageAnalyse,
}: Props) => {
  return (
    <>
      <Card className="my-3">
        <Card.Header>
          <h3 className="text-center">Evolution of publication</h3>
        </Card.Header>
        <LineChart
          title="Evolution of publication"
          data={publishAnalyse}
          options={{ XAxisLabelAngle: 90, XAxisLabelFont: "7px" }}
        />
      </Card>
      <Card className="my-3">
        <Card.Header>
          <h3 className="text-center">Sentiments</h3>
        </Card.Header>
        <BarChart
          options={{
            customXAxisLabel: "Negative to postive",
            displayXAxisLabel: false,
            XAxisLabelFont: "7px",
            displayYAxisLabel: true,
          }}
          data={sentimentAnalyse}
        />
      </Card>
      <Card className="my-3">
        <Card.Header>
          <h3 className="text-center">Language</h3>
        </Card.Header>
        <BarChart
          options={{
            XAxisLabelAngle: 90,
            displayXAxisLabel: true,
            displayYAxisLabel: false,
            XAxisLabelFont: "7px",
          }}
          data={languageAnalyse}
        />
      </Card>
    </>
  );
};

export default Analyse;

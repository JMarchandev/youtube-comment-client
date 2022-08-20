import { Card } from "react-bootstrap";
import { LineAnalyse } from "../services/types/analyse";
import LineChart from "../components/chart/lineChart";

type Props = {
  publishAnalyse: LineAnalyse;
};

export const Analyse = ({ publishAnalyse }: Props) => {
  return (
    <Card className="my-3">
      <Card.Header>
        <h3 className="text-center">Evolution of publication</h3>
      </Card.Header>
      <LineChart title="Evolution of publication" data={publishAnalyse} />
    </Card>
  );
};

export default Analyse;

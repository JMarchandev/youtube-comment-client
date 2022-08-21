import { Analyse } from "../../services/types/analyse";
import { VictoryPie } from "victory";

type Props = {
  data: Analyse;
};

export const PieChart = ({ data }: Props) => {
  return <VictoryPie data={data} />;
};

export default PieChart;

import { VictoryBar, VictoryChart, VictoryTooltip } from "victory";

import { Analyse } from "../../services/types/analyse";

type Props = {
  data: Analyse[];
};

export const TooltipChart = ({ data }: Props) => {
  return (
    <VictoryChart domain={{ x: [0, 11], y: [-10, 10] }}>
      <VictoryBar
        labelComponent={<VictoryTooltip />}
        data={data}
        style={{
          data: { fill: "tomato", width: 20 },
        }}
      />
    </VictoryChart>
  );
};

export default TooltipChart;

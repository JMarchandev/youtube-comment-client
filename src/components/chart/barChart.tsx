import { VictoryAxis, VictoryBar, VictoryChart } from "victory";

import { Analyse } from "../../services/types/analyse";

type Props = {
  data: Analyse;
  options?: {
    displayXAxisLabel?: boolean;
    displayYAxisLabel?: boolean;
    customXAxisLabel?: string;
    XAxisLabelFont?: string;
    XAxisLabelAngle?: number;
  };
};

export const BarChart = ({ data, options }: Props) => {
  return (
    <VictoryChart height={300} domainPadding={10}>
      <VictoryAxis
        style={{
          tickLabels: {
            angle: options?.XAxisLabelAngle ?? 0,
            padding: 20,
            fill: options?.displayXAxisLabel === false ? "transparent" : null,
            ...(options?.XAxisLabelFont
              ? { fontSize: options.XAxisLabelFont }
              : {}),
          },
        }}
        {...(options?.customXAxisLabel
          ? { label: options.customXAxisLabel }
          : {})}
      />
      <VictoryBar
        labels={() => null}
        style={{
          data: { fill: "#c43a31" },
          labels: {
            fill: options?.displayYAxisLabel === false ? "transparent" : "#000",
          },
        }}
        data={data}
      />
    </VictoryChart>
  );
};

export default BarChart;

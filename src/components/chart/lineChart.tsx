import { VictoryAxis, VictoryChart, VictoryLine } from "victory";

import { Analyse } from "../../services/types/analyse";

type Props = {
  data: Analyse;
  title?: string;
  options?: {
    displayXAxisLabel?: boolean;
    customXAxisLabel?: string;
    XAxisLabelFont?: string;
    XAxisLabelAngle?: number;
  };
};

export const LineChart = ({ data, title, options }: Props) => {
  return (
    <VictoryChart
      height={200}
      animate={{
        duration: 2000,
        onLoad: { duration: 1000 },
      }}
      domainPadding={{ x: [0, 0], y: 5 }}
      title={title}
    >
      <VictoryLine
        interpolation="natural"
        style={{
          data: { stroke: "#000" },
        }}
        data={data}
      />
      <VictoryAxis
        dependentAxis
        style={{
          tickLabels: {
            ...(options?.XAxisLabelFont
              ? { fontSize: options.XAxisLabelFont }
              : {}),
          },
        }}
        offsetX={50}
      />
      <VictoryAxis
        style={{
          tickLabels: {
            angle: options?.XAxisLabelAngle ?? 0,
            ...(options?.XAxisLabelFont
              ? { fontSize: options.XAxisLabelFont }
              : {}),
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
    </VictoryChart>
  );
};

export default LineChart;

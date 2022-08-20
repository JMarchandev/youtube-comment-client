import { VictoryAxis, VictoryChart, VictoryLine } from "victory";

type Props = {
  data: {
    x: string;
    y: number;
  }[];
  title: string;
};

export const LineChart = ({ data, title }: Props) => {
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
      <VictoryAxis dependentAxis style={{ tickLabels: { fontSize: "7px" } }} />
      <VictoryAxis
        style={{ tickLabels: { angle: 90, fontSize: "7px", padding: 20 } }}
      />
    </VictoryChart>
  );
};

export default LineChart;
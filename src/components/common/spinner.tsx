import { Rings } from "react-loader-spinner";

type Props = {
  color?: "black";
  className?: string;
  style?: React.CSSProperties;
};

export const Spinner = ({ color = "black", className, style }: Props) => {
  return (
    <div style={style}>
      <Rings wrapperClass={className} height="10vh" width="10vw" color={color} />
    </div>
  );
};

export default Spinner;

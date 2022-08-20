import { Spinner } from "react-bootstrap";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  as: "border" | "grow";
};

export const CustomSpinner = ({
  className,
  style,
  as,
}: Props) => {
  return <Spinner style={style} className={className} animation={as} />;
};

export default CustomSpinner;

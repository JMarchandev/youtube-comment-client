import { Card } from "react-bootstrap";

type Props = {
  children: JSX.Element;
  className?: string;
};

export const CustomCard = ({ children, className }: Props) => {
  return <Card className={className}>{children}</Card>;
};

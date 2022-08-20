import { Button } from "react-bootstrap";
import Spinner from "./spinner";

type Props = {
  text: string;
  onClick: () => void;
  isLoading?: boolean;
};

export const CustomButton = ({ text, onClick, isLoading }: Props) => {
  return (
    <Button onClick={onClick} className="d-flex">
      {text}
      {isLoading && <Spinner as="border" />}
    </Button>
  );
};

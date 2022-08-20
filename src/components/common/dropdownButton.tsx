import { Dropdown, DropdownButton } from "react-bootstrap";

import { ActionsExport } from "../../services/types/actionsExport";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  actions: ActionsExport[];
  title: string;
};

export const CustomDropdownButton = ({
  className,
  style,
  actions,
  title,
}: Props) => {
  return (
    <DropdownButton
      className={className}
      style={style}
      title={title}
    >
      {actions.map((action) => (
        <Dropdown.Item key={action.label} onClick={action.handler}>
          {action.label}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
};

export default CustomDropdownButton;

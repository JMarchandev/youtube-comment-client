import { Dropdown, DropdownButton } from "react-bootstrap";

import { ActionsExport } from "../../services/types/actionsExport";

type Props = {
  className?: string;
  style?: React.CSSProperties;
  actions: ActionsExport[];
};

export const CustomDropdownButton = ({ className, style, actions }: Props) => {
  return (
    <DropdownButton
      className={className}
      style={style}
      id="dropdown-basic-button"
      title="Dropdown button"
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

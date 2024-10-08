import { Button, ButtonProps } from "@radix-ui/themes";

import "./ActionButton.css";

type ActionButtonProps = ButtonProps & {
  text: string;
  isSelected?: boolean;
  isError?: boolean;
};

const ActionButton = ({
  text,
  isSelected,
  isError,
  onClick,
  ...props
}: ActionButtonProps) => {
  return (
    <Button
      {...props}
      variant={isSelected ? "solid" : "outline"}
      color={isError ? "red" : undefined}
      onClick={isError || isSelected ? undefined : onClick}
      className="action-button"
    >
      {text}
    </Button>
  );
};

export { ActionButton };

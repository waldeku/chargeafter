import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Flex, Text, FlexProps, Spinner } from "@radix-ui/themes";

import { ICON_SIZE } from "src/utils/constants";

type StatusMessageProps = FlexProps & {
  message: string;
  type?: "error" | "loading";
};

const StatusMessage = ({
  message,
  type = "error",
  ...props
}: StatusMessageProps) => {
  const icon =
    type === "error" ? (
      <ExclamationTriangleIcon width={ICON_SIZE} height={ICON_SIZE} />
    ) : (
      <Spinner size="3" />
    );

  return (
    <Flex direction="column" justify="center" align="center" gap="2" {...props}>
      {icon}
      <Text weight="regular">{message}</Text>
    </Flex>
  );
};

export { StatusMessage };

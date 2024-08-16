import { Dialog, Button, Flex } from "@radix-ui/themes";

type ModalProps = Dialog.RootProps & {
  onCloseClick: () => void;
};

const Modal = ({ onCloseClick, ...props }: ModalProps) => {
  return (
    <Dialog.Root {...props}>
      <Dialog.Content maxWidth="450px">
        <Dialog.Title>Congratulations</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          You selected all pairs and won this game!
        </Dialog.Description>
        <Flex mt="4" justify="end">
          <Dialog.Close onClick={onCloseClick}>
            <Button>Play again</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export { Modal };

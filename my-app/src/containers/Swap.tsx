import { Flex } from "@chakra-ui/layout";
import {
  FormControl,
  FormLabel,
  Heading,
  InputGroup,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import AccountModal from "components/AccountModal";
import ConnectWalletButton from "components/ConnectWalletButton";

const Swap = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      direction="column"
      flex="1"
      background={formBackground}
      p={12}
      rounded={8}
      maxW={550}
    >
      <Flex>
        <Heading mb={8}>Swap</Heading>
        <Spacer />
        <ConnectWalletButton handleOpenModal={onOpen} />
      </Flex>
      <form>
        <FormControl id="fromTokenInput">
          <FormLabel htmlFor="fromTokenInput" fontSize="20">
            Token Amount
          </FormLabel>
          <InputGroup>
            <NumberInput size="md" variant="filled" defaultValue={15} mr={5}>
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </InputGroup>
        </FormControl>
      </form>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Swap;

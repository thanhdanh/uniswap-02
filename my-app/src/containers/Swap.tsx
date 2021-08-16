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
import { useEthers } from "@usedapp/core";
import AccountModal from "components/AccountModal";
import ConnectWalletButton from "components/ConnectWalletButton";
import SwapTokenButton from "components/SwapTokenButton";
import { useState } from "react";

const Swap = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [amountSwap, setAmountSwap] = useState(0);
  const handleChange = (event: any) => setAmountSwap(event.target.value)
  const { account } = useEthers();

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
              <NumberInputField value={amountSwap} onChange={handleChange} />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {account && <SwapTokenButton account={account} amountIn={amountSwap} />}
          </InputGroup>
        </FormControl>
      </form>
      <AccountModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default Swap;

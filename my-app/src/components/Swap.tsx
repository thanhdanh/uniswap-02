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
  useColorModeValue,
} from "@chakra-ui/react";
import { useEthers } from "@usedapp/core";
import AccountInfo from "./AccountInfo";
import ConnectWalletButton from "./ConnectWalletButton";
import SwapTokenButton from "./SwapTokenButton";

const Swap = () => {
  const formBackground = useColorModeValue("gray.100", "gray.700");
  const { activateBrowserWallet, account } = useEthers();

  return (
    <Flex
      direction="column"
      flex="1"
      background={formBackground}
      p={12}
      rounded={8}
      maxW={550}
    >
      <Heading mb={8}>Swap</Heading>
			{account && <AccountInfo account={account} />}
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
            {!account ? (
              <ConnectWalletButton
                handleConnectWallet={() => {
                  activateBrowserWallet();
                }}
              />
            ) : (
              <SwapTokenButton />
            )}
          </InputGroup>
        </FormControl>
      </form>
    </Flex>
  );
};

export default Swap;

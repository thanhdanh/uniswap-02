import { Box, Button, Text } from "@chakra-ui/react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import useDAIToken from "utils/useDAIToken";
import { getWeb3Utils } from "utils/web3";
import Identicon from "./Identicon";

type ConnectWalletButtonProps = {
  handleOpenModal: () => void;
};

const ConnectWalletButton = (props: ConnectWalletButtonProps) => {
  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const { balance } = useDAIToken(account);

  return account ? (
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      borderRadius="xl"
      py="0"
    >
      <Box px="3">
        <Text color="white" fontSize="md">
          {etherBalance &&
            parseFloat(
              getWeb3Utils().fromWei(etherBalance.toString(), "ether")
            ).toFixed(3)}{" "}
          ETH
        </Text>
        <Text color="white" fontSize="md">
          {balance} DAI
        </Text>
      </Box>
      <Button
        onClick={props.handleOpenModal}
        bg="gray.800"
        border="1px solid transparent"
        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "blue.400",
          backgroundColor: "gray.700",
        }}
        borderRadius="xl"
        m="1px"
        px={3}
        height="38px"
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />
      </Button>
    </Box>
  ) : (
    <Button
      onClick={() => {
        activateBrowserWallet();
      }}
      bg="blue.800"
      color="blue.300"
      fontSize="lg"
      fontWeight="medium"
      border="1px solid transparent"
      _hover={{
        borderColor: "blue.700",
        color: "blue.400",
      }}
      _active={{
        backgroundColor: "blue.800",
        borderColor: "blue.700",
      }}
    >
      Connect to a wallet
    </Button>
  );
};

export default ConnectWalletButton;

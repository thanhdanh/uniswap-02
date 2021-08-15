import { Button } from "@chakra-ui/react";

type ConnectWalletButtonProps = {
    handleConnectWallet: () => void;
}

const ConnectWalletButton = (props: ConnectWalletButtonProps) => {
    return (
        <Button
            onClick={props.handleConnectWallet}
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
}

export default ConnectWalletButton;
import { Button } from "@chakra-ui/react";
import { useSwap } from "utils/useSwap";

const SwapTokenButton = ({ account, amountIn }: { account: string, amountIn: number }) => {
    const { swapExactTokensForEther } = useSwap();
    return (
        <Button onClick={() => swapExactTokensForEther(account, amountIn)}>
            Swap tokens to ether
        </Button>
    )
}

export default SwapTokenButton;

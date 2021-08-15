import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <Flex
            minHeight="100vh"
            padding="0 0.5rem"
            justifyContent="center"
            alignItems="center"
        >
            {children}
        </Flex>
    )
}

export default Layout;

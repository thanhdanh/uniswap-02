import { Box, Heading } from "@chakra-ui/react"

const AccountInfo = ({ account }: { account?: string }) => {
    return (
        <Box border="1px solid #efefef" p={5} mb={8} borderRadius='xl'>
            <Heading as="h3" size="xs">Account information</Heading>
            {account}
        </Box>
    )
}

export default AccountInfo;
import React from 'react';
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";
import Swap from './components/Swap';
import Layout from './components/Layout';

const config : ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const theme = extendTheme({ config });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Swap />
      </Layout>
    </ChakraProvider>
  )
}

export default App;

import * as React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import theme from "./extendedTheme";
import { Outlet } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex gap={1}>
      <Navigation />
      <Outlet />
    </Flex>
  </ChakraProvider>
);

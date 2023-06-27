import * as React from "react";
import { ChakraProvider, Flex, Box } from "@chakra-ui/react";
import Navigation from "./components/Navigation";
import theme from "./extendedTheme";
import { Outlet } from "react-router-dom";
import ContentLoader from "./components/shared/ContentLoader";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ContentLoader>
      <Flex gap={1}>
        <Navigation />
        <Box>
          <Outlet />
        </Box>
      </Flex>
    </ContentLoader>
  </ChakraProvider>
);

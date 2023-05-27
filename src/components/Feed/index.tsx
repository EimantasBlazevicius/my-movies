import React from "react";
import { Box, Center, Divider, Flex } from "@chakra-ui/react";
import ContentFeed from "./components/ContentFeed";

const Feed = () => {
  return (
    <Flex gap={3} w="full">
      <ContentFeed />

      <Box>Not sure what to do here yet</Box>
    </Flex>
  );
};

export default Feed;

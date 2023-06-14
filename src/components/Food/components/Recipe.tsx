import {
  Box,
  Divider,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Slides from "./Slides";

const Recipe = () => {
  return (
    <Flex w="full" bgColor="white" flexDir="column">
      <Flex h="65vh">
        <Slides />
        <Flex flexDir="column" p={10} w="50%">
          <Text as="h1" fontSize="5xl">
            Trikampiukai
          </Text>

          <Divider sx={{ my: 5, borderColor: "gray.500", w: "50%" }} />

          <Box>
            <UnorderedList>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
              <ListItem fontSize="2xl">Lorem ipsum dolor sit amet</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
      <Flex>asdasdasdas</Flex>
    </Flex>
  );
};

export default Recipe;

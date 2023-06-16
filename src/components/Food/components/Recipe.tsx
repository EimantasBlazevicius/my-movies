import React from "react";
import {
  Box,
  Divider,
  Flex,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import Slides from "./Slides";
import { RecipeProps } from "./recipes";

const Recipe = ({
  title,
  ingredients,
  generalDescription,
  steps,
  imageURLs,
}: RecipeProps) => {
  return (
    <Flex w="full" bgColor="white" flexDir="column">
      <Flex>
        <Slides imageURLs={imageURLs} />
        <Flex flexDir="column" p={10} w="50%" h="fit-content">
          <Text as="h1" fontSize="5xl">
            {title}
          </Text>

          <Divider sx={{ my: 5, borderColor: "gray.500", w: "50%" }} />

          <Box>
            <UnorderedList>
              {ingredients.map((ingredient) => (
                <ListItem fontSize="1xl">{ingredient}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
      <Divider sx={{ borderColor: "gray.300", w: "90%" }} />
      <Flex p={10} pt={5} gap={10}>
        <Flex flex={1}>{generalDescription}</Flex>
        <Flex flex={1} flexDir="column">
          <OrderedList>
            {steps.map((step) => (
              <ListItem fontSize="1xl">{step}</ListItem>
            ))}
          </OrderedList>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Recipe;

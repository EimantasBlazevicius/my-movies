import React from "react";
import {
  Box,
  Divider,
  Flex,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Slides, { Slide } from "./Slides";
import { RecipeProps } from "./recipes";

const Recipe = ({ title, ingredients, steps, imageURLs }: RecipeProps) => {
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
                <ListItem fontSize="2xl">{ingredient}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>
      <Divider sx={{ borderColor: "gray.300", w: "90%" }} />
      <Flex p={10} pt={5}>
        {steps}
      </Flex>
    </Flex>
  );
};

export default Recipe;

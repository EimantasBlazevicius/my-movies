import React from "react";
import { Flex } from "@chakra-ui/react";
import RecipesFeed from "./components/RecipesFeed";
import RecipesForm from "./components/RecipesForm";

const Food = () => {
  return (
    <Flex gap={3} w="full">
      <Flex w="45%">
        <RecipesFeed />
      </Flex>
      <Flex w="55%">
        <RecipesForm />
      </Flex>
    </Flex>
  );
};

export default Food;

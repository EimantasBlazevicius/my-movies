import React from "react";
import { Divider, Flex } from "@chakra-ui/react";
import Recipe from "./components/Recipe";
import { recipes } from "./components/recipes";

const Food = () => {
  return (
    <Flex gap={3} w="full" flexDir="column">
      {recipes.map(
        ({ title, ingredients, steps, generalDescription, imageURLs }) => (
          <>
            <Recipe
              title={title}
              ingredients={ingredients}
              steps={steps}
              generalDescription={generalDescription}
              imageURLs={imageURLs}
            />
            <Divider borderColor="gray.400" />
          </>
        )
      )}
    </Flex>
  );
};

export default Food;

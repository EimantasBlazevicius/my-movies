import React from "react";
import { Flex } from "@chakra-ui/react";
import Recipe from "./components/Recipe";

const Food = () => {
  return (
    <Flex gap={3} w="full">
      <Recipe />
    </Flex>
  );
};

export default Food;

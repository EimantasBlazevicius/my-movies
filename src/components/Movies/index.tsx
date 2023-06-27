import React from "react";
import { Flex } from "@chakra-ui/react";
import MoviesFeed from "./components/MoviesFeed";
import MoviesForm from "./components/MoviesForm";

const Movies = () => {
  return (
    <Flex
      gap={3}
      w="full"
      justifyContent="space-evenly"
      sx={{
        flexDir: { base: "column", xl: "row" },
      }}
    >
      <Flex
        sx={{ flex: { base: 1, xl: 2 }, width: { base: "full", xl: "auto" } }}
      >
        <MoviesFeed />
      </Flex>
      <Flex flex={3}>
        <MoviesForm />
      </Flex>
    </Flex>
  );
};

export default Movies;

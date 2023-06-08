import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import MoviesFeed from "./components/MoviesFeed";
import MoviesForm from "./components/MoviesForm";

const Movies = () => {
  return (
    <Flex gap={3} w="full">
      <Flex w="45%">
        <MoviesFeed />
      </Flex>
      <Flex w="55%">
        <MoviesForm />
      </Flex>
    </Flex>
  );
};

export default Movies;

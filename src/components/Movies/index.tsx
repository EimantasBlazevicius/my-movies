import React from "react";
import { Flex } from "@chakra-ui/react";
import MoviesFeed from "./components/MoviesFeed";
import MoviesForm from "./components/MoviesForm";
import { MoviePostInterface } from "../../helpers/database";

const Movies = () => {
  return (
    <Flex gap={3} w="full">
      <Flex w="35vw">
        <MoviesFeed />
      </Flex>
      <Flex w="45vw">
        <MoviesForm />
      </Flex>
    </Flex>
  );
};

export default Movies;

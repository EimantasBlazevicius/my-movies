import React, { ChangeEvent } from "react";
import {
  Stack,
  Text,
  Flex,
  Avatar,
  Textarea,
  Button,
  Image,
  VStack,
  Box,
} from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredMovies, getSelectedMovie } from "../../slice";
import {
  getFilteredMoviesSelector,
  getSelectedMovieSelector,
} from "../../slice/selectors";

const MoviesForm = () => {
  const dispatch = useDispatch();
  const filteredMovies = useSelector(getFilteredMoviesSelector);
  const selectedMovieDetails = useSelector(getSelectedMovieSelector);
  const [inputValue, setInputValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    dispatch(getFilteredMovies(inputValue));
  }, [dispatch, inputValue]);

  const handleMovieSelected = (movie: string) => {
    dispatch(getSelectedMovie(movie));
  };

  const handleSubmit = () => {};

  return (
    <Stack spacing={3} width="full" py={5} pe={5} ps={2}>
      <Text fontWeight={600} as="h3">
        Search for your movie
      </Text>
      <Flex
        _dark={{
          bg: "gray.300",
        }}
        justifyContent="center"
      >
        <AutoComplete
          maxSelections={1}
          maxSuggestions={7}
          rollNavigation
          suggestWhenEmpty={false}
        >
          <AutoCompleteInput
            variant="filled"
            placeholder="Guardians of The Galaxy III"
            autoFocus
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputValue(e.target.value)
            }
          />
          <AutoCompleteList>
            {filteredMovies &&
              filteredMovies.map((movie, oid) => (
                <AutoCompleteItem
                  key={`option-${oid}`}
                  value={movie.Title}
                  textTransform="capitalize"
                  align="center"
                  onClick={() => handleMovieSelected(movie.Title)}
                >
                  <Avatar size="sm" name={movie.Title} src={movie.Poster} />
                  <Text ml="4">{movie.Title}</Text>
                </AutoCompleteItem>
              ))}
          </AutoCompleteList>
        </AutoComplete>
      </Flex>
      <Flex>
        <Image
          boxSize="300px"
          flexBasis="fit-content"
          src={selectedMovieDetails?.Poster}
          alt={selectedMovieDetails?.Title}
        />
        <VStack ms={4} alignItems="flex-start">
          <Box>
            <Text textAlign="start" as="span" fontWeight={500}>
              Genre:{" "}
            </Text>
            <Text as="span" fontWeight={400}>
              {selectedMovieDetails?.Genre}
            </Text>
          </Box>
          <Box>
            <Text as="span" fontWeight={500}>
              Director:{" "}
            </Text>
            <Text as="span" fontWeight={400}>
              {selectedMovieDetails?.Director}
            </Text>
          </Box>
          <Box>
            <Text as="span" fontWeight={500}>
              Actors:{" "}
            </Text>
            <Text as="span" fontWeight={400}>
              {selectedMovieDetails?.Actors}
            </Text>
          </Box>
          <Box>
            <Text as="span" fontWeight={500}>
              Awards:{" "}
            </Text>
            <Text as="span" fontWeight={400}>
              {selectedMovieDetails?.Awards}
            </Text>
          </Box>
          <Box>
            <Text as="span" fontWeight={500}>
              Box office:{" "}
            </Text>
            <Text as="span" fontWeight={400}>
              {selectedMovieDetails?.BoxOffice}
            </Text>
          </Box>
          <Box>
            <Text as="span" fontWeight={500}>
              iMDB rating:{" "}
            </Text>
            <Text as="span" fontWeight={400}>
              {selectedMovieDetails?.imdbRating}
            </Text>
          </Box>
        </VStack>
      </Flex>
      <Text fontWeight={500}>Share your thoughts about this movie: </Text>
      <Textarea
        value={description}
        variant="filled"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
      />
      <Button
        colorScheme="teal"
        variant="solid"
        size="md"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default MoviesForm;

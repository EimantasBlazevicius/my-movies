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
import database from "../../../../helpers/database";
import { getCurrentUserSelector } from "../../../../slice/selectors";

const MoviesForm = () => {
  const dispatch = useDispatch();
  const filteredMovies = useSelector(getFilteredMoviesSelector);
  const selectedMovieDetails = useSelector(getSelectedMovieSelector);
  const currentUser = useSelector(getCurrentUserSelector);
  const [inputValue, setInputValue] = React.useState("");
  const [description, setDescription] = React.useState("");

  React.useEffect(() => {
    dispatch(getFilteredMovies(inputValue));
  }, [dispatch, inputValue]);

  const handleMovieSelected = (movie: string) => {
    dispatch(getSelectedMovie(movie));
  };

  const handleSubmit = () => {
    database.writeMovieToUser({
      uid: currentUser.uid,
      userName: currentUser.displayName,
      userPhotoURL: currentUser.photoURL,
      movieTitle: selectedMovieDetails?.Title,
      moviePoster: selectedMovieDetails?.Poster,
      opinion: description,
      ratings: selectedMovieDetails?.Ratings,
    });
  };

  return (
    <Stack spacing={5} width="full" py={5} pe={5} ps={2}>
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
      {selectedMovieDetails && (
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
      )}
      <Flex flexDirection="column" gap={3} sx={{ marginTop: "auto!important" }}>
        <Text fontWeight={500}>Share your thoughts about this movie: </Text>
        <Textarea
          value={description}
          variant="outline"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
          rows={5}
          resize="none"
          maxLength={500}
        />
        <Button
          colorScheme="teal"
          variant="solid"
          size="md"
          onClick={handleSubmit}
        >
          Post this Amazing Opinion
        </Button>
      </Flex>
    </Stack>
  );
};

export default MoviesForm;

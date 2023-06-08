import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Flex,
  Text,
  Heading,
  IconButton,
  CardBody,
  CardFooter,
  Button,
  Image,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import database, { MoviePostInterface } from "../../../../helpers/database";
import imdb from "./imdb.png";
import meta from "./meta.png";
import rt from "./rt.png";

const MoviesFeed = () => {
  const [moviePosts, setMoviePosts] = React.useState<MoviePostInterface[]>();

  const posts = database.getPosts();
  posts.then((res) => {
    setMoviePosts(res);
  });

  const emojisForCritics = [imdb, rt, meta];

  return (
    <Flex direction="column" overflow="auto" maxH="100vh" w="full" py={3}>
      {moviePosts &&
        moviePosts.map((post) => (
          <Card
            key={post.uid}
            maxW="35vw"
            maxH="fit-content"
            boxShadow="3px 0px 10px rgb(0 0 0 / 0.2), 0px -3px 10px rgb(0 0 0 / 0.2)"
            mt={3}
            mx={3}
          >
            <CardHeader>
              <Flex gap={2}>
                <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                  <Avatar
                    name={post.userName ? post.userName : "John Doe"}
                    src={post.userPhotoURL ? post.userPhotoURL : ""}
                  />
                  <Box>
                    <Heading size="sm">
                      {post.userName ? post.userName : "John Doe"}
                    </Heading>
                    <Text>Fantastic Person</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant="ghost"
                  colorScheme="gray"
                  aria-label="See menu"
                  icon={<BsThreeDotsVertical />}
                />
              </Flex>
            </CardHeader>
            <CardBody>
              <Text>{post.opinion}</Text>
            </CardBody>
            <Divider color="grey" boxShadow="0px -9px 10px black" />
            <Flex>
              <Image
                boxSize="300px"
                flexBasis="fit-content"
                src={post.moviePoster ? post.moviePoster : ""}
                alt={post.movieTitle ? post.movieTitle : ""}
              />

              <VStack ms={4} alignItems="flex-start">
                <Box>
                  <Text textAlign="start" as="span" fontWeight={500}>
                    Title:{" "}
                  </Text>
                  <Text as="span" fontWeight={400}>
                    {post.movieTitle ? post.movieTitle : ""}
                  </Text>
                </Box>
                {/* <Box>
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
                </Box> */}
              </VStack>
            </Flex>

            <Divider color="grey" sx={{ boxShadow: "1px 4px 5px grey" }} />
            <CardFooter
              justify="space-between"
              flexWrap="wrap"
              sx={{
                "& > button": {
                  minW: "136px",
                },
              }}
            >
              <Flex
                flexDir="row"
                w="full"
                justifyContent="space-between"
                flex="auto"
                px={5}
              >
                {post.ratings &&
                  post.ratings.map((rating, index) => (
                    <Text>
                      <Image boxSize={10} src={emojisForCritics[index]} />
                      {rating.Value}
                    </Text>
                  ))}
              </Flex>
            </CardFooter>
          </Card>
        ))}
    </Flex>
  );
};

export default MoviesFeed;

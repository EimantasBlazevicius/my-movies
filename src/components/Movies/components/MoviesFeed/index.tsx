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
  Image,
  Divider,
  VStack,
  Progress,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import imdb from "./imdb.png";
import meta from "./meta.png";
import rt from "./rt.png";
import { useDispatch, useSelector } from "react-redux";
import { getMoviePostsSelector } from "../../slice/selectors";
import { getMoviePosts } from "../../slice";

const MoviesFeed = () => {
  const emojisForCritics = [imdb, rt, meta];
  const dispatch = useDispatch();
  const moviePosts = useSelector(getMoviePostsSelector);

  React.useEffect(() => {
    dispatch(getMoviePosts());
  }, [dispatch]);

  console.log(moviePosts);

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
            <Divider color="gray.300" />
            <Flex>
              <Image
                boxSize="300px"
                flexBasis="fit-content"
                src={post.moviePoster ? post.moviePoster : ""}
                alt={post.movieTitle ? post.movieTitle : ""}
              />

              <VStack ms={4} my={5} alignItems="flex-start" w="full" pe={4}>
                <Box>
                  <Text as="h5" fontSize={30} fontWeight={500}>
                    {post.movieTitle ? post.movieTitle : ""}
                  </Text>
                </Box>
                <Box>
                  <Text as="span" fontWeight={500}>
                    Director:{" "}
                  </Text>
                  <Text as="span" fontWeight={400}>
                    {post.director}
                  </Text>
                </Box>
                <Box>
                  <Text as="span" fontWeight={500}>
                    Actors:{" "}
                  </Text>
                  <Text as="span" fontWeight={400}>
                    {post.actors}
                  </Text>
                </Box>
                <Box>
                  <Text as="span" fontWeight={500}>
                    Awards:{" "}
                  </Text>
                  <Text as="span" fontWeight={400}>
                    {post.awards}
                  </Text>
                </Box>
                <Box>
                  <Text as="span" fontWeight={500}>
                    Box office:{" "}
                  </Text>
                  <Text as="span" fontWeight={400}>
                    {post.boxOffice}
                  </Text>
                </Box>
                <Box>
                  <Text as="span" fontWeight={500}>
                    User rating:{" "}
                  </Text>
                </Box>
                <Progress
                  colorScheme="green"
                  size="lg"
                  value={post.opinionRating}
                  max={10}
                  min={0}
                  w="full"
                />
              </VStack>
            </Flex>

            <Divider
              color="gray.200"
              sx={{ boxShadow: "1px 2px 10px gray.900" }}
            />
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
                    <Box key={index}>
                      <Image boxSize={10} src={emojisForCritics[index]} />
                      <Text textAlign="center">{rating.Value}</Text>
                    </Box>
                  ))}
              </Flex>
            </CardFooter>
          </Card>
        ))}
    </Flex>
  );
};

export default MoviesFeed;

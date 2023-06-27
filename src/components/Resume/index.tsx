import React from "react";
import {
  Box,
  Flex,
  Heading,
  Highlight,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import ProfilePic from "./profile.jpg";

const Resume = () => {
  return (
    <Flex flexDir="column" overflow="auto" maxH="100vh">
      <Flex>
        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box
            w="xs"
            bg="white"
            _dark={{
              bg: "gray.800",
            }}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
            mx="auto"
          >
            <Image w="full" h={350} fit="cover" src={ProfilePic} alt="avatar" />

            <Box py={5} textAlign="center">
              <Link
                display="block"
                fontSize="2xl"
                color="gray.800"
                _dark={{
                  color: "white",
                }}
                fontWeight="bold"
              >
                Eimantas Blaževičius
              </Link>
              <Text
                as="span"
                fontSize="sm"
                color="gray.700"
                _dark={{
                  color: "gray.200",
                }}
              >
                Software Engineer, Teacher
              </Text>
            </Box>
          </Box>
        </Flex>

        <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Heading lineHeight="tall">
            <Highlight
              query={["software", "love", "teacher"]}
              styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}
            >
              Writing software is fascinating. As a programmer I love to create
              and share how to create. I am a teacher, not a lecturer.
            </Highlight>
          </Heading>
        </Flex>
      </Flex>
      <Flex
        bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={50}
        w="full"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        gap={7}
      >
        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://scontent.fvno1-1.fna.fbcdn.net/v/t1.6435-9/47310147_2316081028419982_9190872947038879744_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=s3J4u2dN-AMAX8jxsnT&_nc_ht=scontent.fvno1-1.fna&oh=00_AfBcFF05rxS-oxlwYVLQEIKvOcavcTde47IyzVPQi57dCw&oe=64B60272')",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <Text
              as="h2"
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Bazaarvoice
            </Text>
            <Text
              as="p"
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Bazaarvoice was my first more stable work place where I stayed for
              3 years, I have started my journey as a Tier 2 Technical support
              agent and changed positions every year. Firs to Technical
              implementation team and eventually getting to Tier 3 Technical
              support.
              <br />
              In this position I have generated a lot of Python knowledge and
              over time while working on a few internat tools I wanted to see
              created, I have learned JS and what I though at the time, mastered
              React.
            </Text>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}
                href="https://www.bazaarvoice.com/"
              >
                Bazaarvoice website
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/ddc2dc66-af4a-41c2-9d9e-5656acdb96a9.png?auto=format&q=50')",
                backgroundPositionX: "center",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <Text
              as="h2"
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Talech
            </Text>
            <Text
              as="p"
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Eventually the love for code overtook and I have joined talech
              team as a junior frontend developer. This is where I have learned
              a lot about React and JS climate in general as it include some
              legacy code supporting while writing new version of the legacy
              app.
              <br />
              <br />
              List of the stack: React.js, Redux, Redux-saga, chakra-ui, Jest,
              Typescript, Webpack, Grunt, Knockout.js
            </Text>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}
                href="https://www.talech.com/"
              >
                Talech website
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          mx={{
            lg: 8,
          }}
          display={{
            lg: "flex",
          }}
          maxW={{
            lg: "5xl",
          }}
          shadow={{
            lg: "lg",
          }}
          rounded={{
            lg: "lg",
          }}
        >
          <Box
            w={{
              lg: "50%",
            }}
          >
            <Box
              h={{
                base: 64,
                lg: "full",
              }}
              rounded={{
                lg: "lg",
              }}
              bgSize="cover"
              style={{
                backgroundImage:
                  "url('https://sdacademy.lt/sda-assets/uploads/sites/3/2021/09/og-image.png')",
                backgroundPositionX: "center",
              }}
            ></Box>
          </Box>

          <Box
            py={12}
            px={6}
            maxW={{
              base: "xl",
              lg: "5xl",
            }}
            w={{
              lg: "50%",
            }}
          >
            <Text
              as="h2"
              fontSize={{
                base: "2xl",
                md: "3xl",
              }}
              color="gray.800"
              _dark={{
                color: "white",
              }}
              fontWeight="bold"
            >
              Software development academy
            </Text>
            <Text
              as="p"
              mt={4}
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              At the same time of becoming JS developer I have joined SDA as a
              Teacher for Python due to experience from Bazaarvoice.
              <br />
              Even though over time my experience with JS really grew over the
              time, I continue teaching python, mainly because there is less
              good python teachers and thus more lessons to give.
            </Text>

            <Box mt={8}>
              <Link
                bg="gray.900"
                color="gray.100"
                px={5}
                py={3}
                fontWeight="semibold"
                rounded="lg"
                _hover={{
                  bg: "gray.800",
                }}
                href="https://sdacademy.lt/"
              >
                SDA website
              </Link>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Resume;

import React from "react";
import {
  Button,
  Text,
  Flex,
  Heading,
  useMultiStyleConfig,
  Divider,
  VStack,
  Box,
  StackDivider,
  IconButton,
} from "@chakra-ui/react";
import { EditIcon, SettingsIcon, StarIcon } from "@chakra-ui/icons";

const Navigation = () => {
  const { navigation, heading, menuOption, footer } =
    useMultiStyleConfig("Navigation");

  return (
    <Flex flexDirection="column" sx={navigation}>
      <Heading size="lg" as="h1" sx={heading}>
        My Movies
      </Heading>
      <Divider />
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={0}>
        <Box sx={menuOption}>
          <EditIcon viewBox="0 0 25 25" width={8} /> Feed
        </Box>
        <Box sx={menuOption}>
          <StarIcon viewBox="0 0 25 25" width={8} /> Popular
        </Box>
        <Box sx={menuOption}>
          <SettingsIcon viewBox="0 0 25 15" width={10} />
          Settings
        </Box>
      </VStack>

      <Flex justifyContent="space-between" sx={footer}>
        <Button colorScheme="facebook" variant="solid">
          Register
        </Button>
        <Button colorScheme="whatsapp" variant="solid">
          Login
        </Button>
        <Text>Username</Text>
        <IconButton
          colorScheme="blue"
          aria-label="Search database"
          icon={<SettingsIcon />}
        />
        <Button colorScheme="facebook" variant="outline">
          Logout
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navigation;

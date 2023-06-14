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
  Link,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUserSelector } from "../../slice/selectors";
import { getUser, setActiveUser } from "../../slice/index";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "../../initFirebase";
import { ImExit } from "react-icons/im";
import { MdOndemandVideo } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { RiFilePaper2Line } from "react-icons/ri";
import database from "../../helpers/database";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const { navigation, heading, menuOption, footer } =
    useMultiStyleConfig("Navigation");
  const currentUser = useSelector(getCurrentUserSelector);
  const auth = getAuth(app);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [user, loading, error] = useAuthState(auth);

  React.useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  React.useEffect(() => {
    if (user) {
      dispatch(setActiveUser(user));
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [dispatch, user]);

  const handleJoin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Logged in", result.user);
        database.writeUser(result.user.uid);
        dispatch(setActiveUser(result.user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const handleLogout = () => {
    signOut(auth);
    dispatch(getUser());
  };

  return (
    <Flex flexDirection="column" sx={navigation}>
      <Heading size="lg" as="h1" sx={heading}>
        Eimantas CV Land
      </Heading>
      <Divider />
      <VStack divider={<StackDivider borderColor="gray.200" />} spacing={0}>
        <Box sx={menuOption} onClick={() => navigate("/")}>
          <MdOndemandVideo style={{ marginRight: 12 }} /> Movies
        </Box>
        <Box sx={menuOption} onClick={() => navigate("/food")}>
          <GiHamburger style={{ marginRight: 12 }} /> Food
        </Box>
        <Box sx={menuOption} onClick={() => navigate("/cv")}>
          <RiFilePaper2Line style={{ marginRight: 12 }} />
          Time to Flex
        </Box>
      </VStack>
      <Flex justifyContent="space-between" sx={footer}>
        {!loggedIn && (
          <Button
            colorScheme="whatsapp"
            variant="solid"
            onClick={handleJoin}
            w="full"
          >
            Join
          </Button>
        )}
        {loggedIn && (
          <>
            <Text display="flex" alignItems="center">
              {currentUser.displayName}
            </Text>

            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              variant="outline"
              icon={<ImExit />}
              onClick={handleLogout}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export default Navigation;

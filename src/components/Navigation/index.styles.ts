import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers([
  "navigation",
  "heading",
  "menuOption",
  "footer",
]);

export const Navigation = helpers.defineMultiStyleConfig({
  baseStyle: {
    navigation: {
      bgColor: "gray.100",
      w: "300px",
      boxShadow: "3px 0px 5px rgb(0 0 0 / 0.2);",
      h: "100vh",
    },
    heading: {
      textAlign: "center",
      py: "30px",
      color: "teal.700",
    },
    menuOption: {
      w: "full",
      ps: "30px",
      display: "flex",
      alignItems: "center",
      bgColor: "green.50",
      color: "green.700",
      cursor: "pointer",
      py: "5px",
      fontSize: "20px",
      _hover: {
        bgColor: "green.300",
      },
      _active: {
        bgColor: "green.700",
        color: "green.50",
      },
    },
    footer: {
      px: "20px",
      pb: "15px",
      mt: "auto",
    },
  },
});

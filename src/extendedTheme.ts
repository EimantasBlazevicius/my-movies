import { extendTheme } from "@chakra-ui/react";
import { Navigation } from "./components/Navigation/index.styles";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  components: {
    Navigation,
  },
});

export default theme;

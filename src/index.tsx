import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Movies from "./components/Movies";
import Food from "./components/Food/index";
import Resume from "./components/Resume";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Movies />,
      },
      {
        path: "food",
        element: <Food />,
      },
      {
        path: "cv",
        element: <Resume />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ColorModeScript />
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

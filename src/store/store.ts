import { AnyAction, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import userReducer from "../slice/index";
import moviesReducer from "../components/Movies/slice/index";
import userSaga from "../slice/saga";
import moviesSaga from "../components/Movies/slice/saga";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import states from "./states.interface";

const sagaMiddleware = createSagaMiddleware();

export const store: ToolkitStore<states, AnyAction, SagaMiddleware<object>[]> =
  configureStore({
    reducer: {
      user: userReducer,
      moviesSearch: moviesReducer,
    },
    middleware: [sagaMiddleware],
  });

sagaMiddleware.run(userSaga);
sagaMiddleware.run(moviesSaga);

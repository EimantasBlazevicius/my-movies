import { AnyAction, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import userReducer from "../slice/index";
import userSaga from "../slice/saga";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import states from "./states.interface";

const sagaMiddleware = createSagaMiddleware();

export const store: ToolkitStore<states, AnyAction, SagaMiddleware<object>[]> =
  configureStore({
    reducer: {
      user: userReducer,
    },
    middleware: [sagaMiddleware],
  });

sagaMiddleware.run(userSaga);

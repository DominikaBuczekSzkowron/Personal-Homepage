import { configureStore } from "@reduxjs/toolkit";
import projectSlice from "./components/Project/projectSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    project: projectSlice,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;

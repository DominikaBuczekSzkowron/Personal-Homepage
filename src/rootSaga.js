import { all } from "redux-saga/effects";
import { projectSaga } from "./components/Project/projectSaga";

export default function* rootSaga() {
  yield all([projectSaga()]);
}

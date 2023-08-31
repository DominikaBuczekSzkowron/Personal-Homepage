import { call, put, takeEvery } from "redux-saga/effects";
import { getProject } from "./getProject";
import { fetchProject, setError, setProject } from "./projectSlice";

function* fetchProjectHandler() {
  try {
    const project = yield call(getProject);
    yield put(setProject(project));
  } catch {
    yield put(setError());
  }
}

export function* projectSaga() {
  yield takeEvery(fetchProject.type, fetchProjectHandler);
}

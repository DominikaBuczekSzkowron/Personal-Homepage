import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "loading",
  data: {},
  currentPage: 1,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fetchProject: (state) => {
      state.status = "loading";
    },
    setProject: (state, { payload }) => {
      state.data = payload;
      state.status = "success";
    },
    setError: (state) => {
      state.status = "error";
    },
  },
});

export const { fetchProject, setProject, setError } = projectSlice.actions;

export const selectProjectState = (state) => state.project.data;
export const selectProjectStatus = (state) => state.project.status;
export const selectProjectList = (state) => selectProjectState(state);

export default projectSlice.reducer;

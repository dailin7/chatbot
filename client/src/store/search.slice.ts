import { createSlice } from "@reduxjs/toolkit";
import { campuses, terms } from "../pages/Home/filterOptions";

const initialFormData = {
  searchTerm: "",
  term: terms[0],
  campus: campuses[0],
  subject: "",
  catalogNum: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialFormData,
  reducers: {
    setSearchTerm(state, action) {
      return { ...state, searchTerm: action.payload };
    },
    setTerm(state, action) {
      return { ...state, term: action.payload };
    },
    clearTerm(state) {
      return { ...state, ...initialFormData };
    },
    setCampus(state, action) {
      return { ...state, campus: action.payload };
    },
    setSubject(state, action) {
      return { ...state, subject: action.payload };
    },
    setCatalogNum(state, action) {
      return { ...state, catalogNum: action.payload };
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;

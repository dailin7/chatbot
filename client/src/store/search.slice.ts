import { createSlice } from "@reduxjs/toolkit";
import { campuses, terms } from "../pages/Home/filterOptions";

const initialFormData = {
    searchTerm: "",
    term: terms[0].value,
    campus: campuses[0].value,
    subject: "",
    catalogNum: "",
  };

const searchSlice = createSlice({
    name: "search",
    initialState: initialFormData,
    reducers: {
      setSearchTerm(state, action) {
          return { ...state, ...action.payload }
      },
      setTerm(state, action) {
          return { ...state, term: action.payload }
      }
    //   authenticate(state, action: { payload: AuthState; type: string }) {
    //     localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
    //     return action.payload;
    //   },
    //   logout(state) {
    //     localStorage.removeItem("profile");
    //     return null;
    //   },
    },
  });
  
  export const { setSearchTerm } = searchSlice.actions;
  export default searchSlice.reducer;
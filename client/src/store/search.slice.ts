import { createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router";
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
          return { ...state, searchTerm:action.payload }
      },
      setTerm(state, action) {
          return { ...state, term: action.payload }
      },
      clearTerm(state){
        return {...state,...initialFormData}
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
  export const {clearTerm }= searchSlice.actions;
  export default searchSlice.reducer;
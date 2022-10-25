import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search.slice"
// import authReducer from "./auth/auth.slice";
// import { api } from "./auth/auth.api";

const store = configureStore({
  reducer: {
    search: searchReducer
    // auth: authReducer,
    // [api.reducerPath]: api.reducer,
  },
//   middleware: (getDefaultMiddleware) =>
    // getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
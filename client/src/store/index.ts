import { configureStore } from "@reduxjs/toolkit";
import { googleApi } from "./google.api";
import { osuApi } from "./search.api";
import searchReducer from "./search.slice";

const store = configureStore({
  reducer: {
    search: searchReducer,
    [osuApi.reducerPath]: osuApi.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([osuApi.middleware, googleApi.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

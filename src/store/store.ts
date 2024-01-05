import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "./favorites/favorite.slice";
import { userSlice } from "./user/user.slice";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({
  // collapsed: true,
});

const reducers = combineReducers({
  favorites: favoriteReducer,
  user: userSlice.reducer,
  [api.reducerPath]: api.reducer,
});

export const store = configureStore({
  reducer: reducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
  // getDefaultMiddleware().concat(api.middleware, logger),
});

export type RootState = ReturnType<typeof store.getState>;

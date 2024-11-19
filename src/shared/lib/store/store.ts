import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { auctionApi } from "../../api/auctionApi";

const reducers = combineReducers({
  [auctionApi.reducerPath]: auctionApi.reducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(auctionApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

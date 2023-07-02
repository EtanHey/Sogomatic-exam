import { configureStore } from "@reduxjs/toolkit";
import formCreatorReducer from "../features/formCreator/formCreatorSlice";

export const store = configureStore({
  reducer: {
    formCreator: formCreatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

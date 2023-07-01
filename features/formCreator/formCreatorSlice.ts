import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { DraggableInput, FormCreatorStatus } from "./formCreator.types";
import { RootState } from "@/state/store";

export interface CounterState {
  status: FormCreatorStatus.IDLE;
  inputsStore: Array<DraggableInput>;
  formInputs: Array<DraggableInput>;
}

const initialState: CounterState = {
  status: FormCreatorStatus.IDLE,
  inputsStore: [
    {
      id: "1",
      name: "TelIl",
      position: { x: 0, y: 70 },
    },
    {
      id: "2",
      name: "Email",
      position: { x: 0, y: 140 },
    },
    {
      id: "3",
      name: "Text",
      position: { x: 0, y: 210 },
    },
    {
      id: "4",
      name: "Time",
      position: { x: 0, y: 280 },
    },
    {
      id: "5",
      name: "DateTime",
      position: { x: 0, y: 350 },
    },
    {
      id: "6",
      name: "Date",
      position: { x: 0, y: 420 },
    },
  ],
  formInputs: [],
};

export const formCreatorSlice = createSlice({
  name: "formCreator",
  initialState,
  reducers: {},

  extraReducers: (builder) => {},
});

export const {} = formCreatorSlice.actions;

export const selectFormCreatorInputStore = (state: RootState) =>
  state.formCreator.inputsStore;

export default formCreatorSlice.reducer;

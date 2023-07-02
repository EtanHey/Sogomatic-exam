import { createSlice, original } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  DraggableInput,
  FormCreatorStatus,
  NewFormInfo,
} from "./formCreator.types";
import { RootState } from "@/state/store";
import { UniqueIdentifier } from "@dnd-kit/core";
import { Coordinates } from "@dnd-kit/utilities";
import { generateId } from "@/utils/helpers";
import { Form, Input } from "@prisma/client";

export interface FormCreatorSlice {
  status: FormCreatorStatus.IDLE;
  inputsStore: Array<DraggableInput>;
  newForm: NewFormInfo;
  formsLibrary: Array<Form>;
}

const initialState: FormCreatorSlice = {
  status: FormCreatorStatus.IDLE,
  inputsStore: [],
  newForm: { title: "", inputs: [] },
  formsLibrary: [],
};

export const formCreatorSlice = createSlice({
  name: "formCreator",
  initialState,
  reducers: {
    initiateInputsStore: (state, action: PayloadAction<Input[]>) => {
      const inputs = action.payload;
      state.inputsStore = inputs;
    },
    moveNewInput: (
      state,
      action: PayloadAction<{ activeId: UniqueIdentifier; delta: Coordinates }>
    ) => {
      const info = action.payload;
      const activeInputId = info.activeId;

      const existingInputIndex = state.newForm.inputs.findIndex(
        (input) => input.id === activeInputId
      );
      const existingInput = state.newForm.inputs[existingInputIndex];
      if (existingInputIndex === -1) {
        const inputToInsert = state.inputsStore.findIndex(
          (input) => input.id === activeInputId
        );

        const originalInput = { ...state.inputsStore[inputToInsert] };

        const newPosition = {
          x: originalInput.position.x + info.delta.x,
          y: originalInput.position.y + info.delta.y,
        };
        const newInput = {
          ...originalInput,
          id: generateId(),
          position: newPosition,
        };
        state.newForm.inputs = [...state.newForm.inputs, newInput];
      } else {
        const newPosition = {
          x: (existingInput.position.x += info.delta.x),
          y: (existingInput.position.y += info.delta.y),
        };
        const updatedInput = {
          ...state.newForm.inputs[existingInputIndex],
          position: newPosition,
        };
        state.newForm.inputs[existingInputIndex] = updatedInput;
      }
    },
    updateInputsName: (
      state,
      action: PayloadAction<{ title: string; id: string }>
    ) => {
      const { title, id } = action.payload;
      const inputIndex = state.newForm.inputs.findIndex(
        (input) => input.id === id
      );
      const currentInput = state.newForm.inputs[inputIndex];
      const updatedInput = { ...currentInput, title };
      state.newForm.inputs[inputIndex] = updatedInput;
    },
    updateFormName: (state, action: PayloadAction<{ title: string }>) => {
      const { title } = action.payload;
      state.newForm.title = title;
    },
    addFormToLibrary: (state, action: PayloadAction<{ form: Form }>) => {
      const { form } = action.payload;
      state.formsLibrary = [...state.formsLibrary, form];
    },
  },

  extraReducers: (builder) => {},
});

export const {
  moveNewInput,
  updateInputsName,
  initiateInputsStore,
  addFormToLibrary,
  updateFormName
} = formCreatorSlice.actions;

export const selectFormCreatorInputStore = (state: RootState) =>
  state.formCreator.inputsStore;
export const selectFormCreatorNewForm = (state: RootState) =>
  state.formCreator.newForm;
export const selectFormCreatorNewFormTitle = (state: RootState) =>
  state.formCreator.newForm.title;
export const selectInputsTitle = (state: RootState, id: string) => {
  const inputIndex = state.formCreator.newForm.inputs.findIndex(
    (input) => input.id === id
  );
  return state.formCreator.newForm.inputs[inputIndex]?.title || "";
};
export default formCreatorSlice.reducer;

// distance is { x: 347, y: 5 }

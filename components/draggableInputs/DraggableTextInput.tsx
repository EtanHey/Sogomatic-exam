import React from "react";
import NewLabeledInput from "../NewInput";
import Draggable from "./Draggable";
import { generateId } from "@/utils/helpers";

const DraggableTextInput = () => {
  const id = generateId();
  return (
    <Draggable id={id}>
      <NewLabeledInput id={id} inputType="text" />
    </Draggable>
  );
};

export default DraggableTextInput;

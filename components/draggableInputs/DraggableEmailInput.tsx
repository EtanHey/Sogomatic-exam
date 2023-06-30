import React from "react";
import NewLabeledInput from "../NewInput";
import { generateId } from "@/utils/helpers";
import Draggable from "./Draggable";

const DraggableEmailInput = () => {
  const id = generateId();

  return (
    <Draggable id={id}>
      <NewLabeledInput id={id} inputType="email" />
    </Draggable>
  );
};

export default DraggableEmailInput;

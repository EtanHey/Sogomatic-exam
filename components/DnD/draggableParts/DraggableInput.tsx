import React from "react";

import { DraggableInputProps } from "@/features/formCreator/formCreator.types";

import Draggable from "./Draggable";
import NewLabeledInput from "@/components/NewInput";

const DraggableInput = ({ styles, input }: DraggableInputProps) => {
  const { id } = input;

  return (
    <Draggable styles={styles} id={id}>
      <NewLabeledInput input={input} />
    </Draggable>
  );
};

export default DraggableInput;

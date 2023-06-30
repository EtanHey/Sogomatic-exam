import React from "react";
import NewLabeledInput from "../NewInput";
import Draggable from "./Draggable";
import { generateId } from "@/utils/helpers";

const DraggableDateInput = () => {

  const id = generateId();
  return (
    <Draggable id={id}>
      <NewLabeledInput id={id} inputType="date" />
    </Draggable>
  );
};

export default DraggableDateInput;

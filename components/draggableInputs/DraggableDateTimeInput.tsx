import React from "react";
import NewLabeledInput from "../NewInput";
import { generateId } from "@/utils/helpers";
import Draggable from "./Draggable";

const DraggableDateTimeInput = () => {
  const id = generateId();

  return (
    <Draggable id={id}>
      <NewLabeledInput id={id} inputType="datetime-local" />
    </Draggable>
  );
};

export default DraggableDateTimeInput;

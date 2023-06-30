import React from "react";
import NewLabeledInput from "../NewInput";
import { generateId } from "@/utils/helpers";
import Draggable from "./Draggable";

const DraggableTelILInput = () => {
  const id = generateId();

  return (
    <Draggable id={id}>
      <NewLabeledInput id={id} inputType="tel" />
    </Draggable>
  );
};

export default DraggableTelILInput;

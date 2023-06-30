import React, { CSSProperties } from "react";
import NewLabeledInput from "../NewInput";
import { generateId } from "@/utils/helpers";
import Draggable from "./Draggable";

const DraggableTimeInput = ({
  styles,
  draggable: { id },
}: {
  styles: CSSProperties;
  draggable: {
    id: string;
    name: string;
    position: {
      x: number;
      y: number;
    };
  };
}) => {
  // const id = generateId();

  return (
    <Draggable styles={styles} id={id}>
      <NewLabeledInput id={id} inputType="time" />
    </Draggable>
  );
};

export default DraggableTimeInput;

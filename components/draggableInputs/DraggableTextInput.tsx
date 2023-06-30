import React, { CSSProperties } from "react";
import NewLabeledInput from "../NewInput";
import Draggable from "./Draggable";


const DraggableTextInput = ({
  styles,
  id,
}: {
  styles: CSSProperties;
  id: string;
}) => {
  return (
    <Draggable styles={styles} id={id}>
      <NewLabeledInput id={id} inputType="text" />
    </Draggable>
  );
};

export default DraggableTextInput;

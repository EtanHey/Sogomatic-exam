import React, { CSSProperties } from "react";
import NewLabeledInput from "../NewInput";

import Draggable from "./Draggable";

const DraggableEmailInput = ({
  styles,
  id,
}: {
  styles: CSSProperties;
  id: string;
}) => {

  return (
    <Draggable styles={styles} id={id}>
      <NewLabeledInput id={id} inputType="email" />
    </Draggable>
  );
};

export default DraggableEmailInput;

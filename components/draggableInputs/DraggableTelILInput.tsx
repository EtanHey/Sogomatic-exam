import React, { CSSProperties } from "react";
import NewLabeledInput from "../NewInput";
import Draggable from "./Draggable";

const DraggableTelILInput = ({
  styles,
  id,
}: {
  styles: CSSProperties;
  id: string;
}) => {
  return (
    <Draggable styles={styles} id={id}>
      <NewLabeledInput id={id} inputType="tel" />
    </Draggable>
  );
};

export default DraggableTelILInput;

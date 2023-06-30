import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

type DraggableProps = {
  id: string;
  styles?: React.CSSProperties;
  children: React.ReactNode;
};

const Draggable = (props: DraggableProps) => {
  const { id, styles, children } = props;
  
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    data:{
      
    }
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    ...styles,
  };

  return (
    <div
      ref={setNodeRef}
      style={{ ...style }}
      className="z-10"
      {...listeners}
      {...attributes}
    >
      <span>{children}</span>
    </div>
  );
};

export default Draggable;

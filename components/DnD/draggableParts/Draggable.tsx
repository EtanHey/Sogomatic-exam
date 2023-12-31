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
    data: {},
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    ...styles,
  };

  return (
    <div ref={setNodeRef} style={{ ...style }} className="z-10">
      <span className="flex w-fit scale-[0.7] flex-col gap-1 bg-white  text-buttonFillNBorder">
        <button
          className="h-5 w-full bg-buttonFillNBorder/50 cursor-grab active:cursor-grabbing"
          {...listeners}
          {...attributes}
        />
        {children}
      </span>
    </div>
  );
};

export default Draggable;

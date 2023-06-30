import { useDroppable } from "@dnd-kit/core";
import React from "react";

const DroppableForm = () => {
  const { setNodeRef } = useDroppable({
    id: "form1128932809123",
  });
  return (
    <div
      ref={setNodeRef}
      className="h-[297mm] w-[210mm] scale-[0.7] z-20 pt-10 text-center text-titleColor outline-dashed"
    >
      <input
        className="w-fit bg-red-500 text-center ring-0"
        type="text"
        placeholder="Form Title"
        id="form-title"
        name="form-title"
      />
    </div>
  );
};

export default DroppableForm;

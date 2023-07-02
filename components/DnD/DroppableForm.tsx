import {
  selectFormCreatorNewForm,
  selectFormCreatorNewFormTitle,
  updateFormName,
} from "@/features/formCreator/formCreatorSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { useDroppable } from "@dnd-kit/core";
import React from "react";

const DroppableForm = () => {
  const dispatch = useAppDispatch();
  const formTitleValue = useAppSelector(selectFormCreatorNewFormTitle);
  const { setNodeRef } = useDroppable({
    id: "form1128932809123",
  });
  return (
    <div
      ref={setNodeRef}
      className="z-20 h-[297mm] w-[210mm] scale-[0.7] pt-10 text-center text-titleColor outline-dashed"
    >
      <input
        className="w-fit bg-red-500 px-2 py-1 text-center ring-0"
        type="text"
        placeholder="Form Title"
        id="form-title"
        value={formTitleValue}
        onChange={(ev) => dispatch(updateFormName({ title: ev.target.value }))}
        name="form-title"
      />
    </div>
  );
};

export default DroppableForm;

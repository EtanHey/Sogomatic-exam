"use client";
import {
  DraggableDateInput,
  DraggableDateTimeInput,
  DraggableEmailInput,
  DraggableTelIL,
  DraggableTextInput,
  DraggableTimeInput,
} from "@/components/draggableInputs";

import React from "react";

const page = () => {
  return (
    <div className="flex h-full max-w-full flex-row place-items-center text-textColor">
      {/* draggable inputs container */}
      <div className="flex h-0 min-h-full flex-col justify-center gap-x-20 gap-y-14 overflow-y-auto bg-gray-500">
        <DraggableTelIL />
        <DraggableEmailInput />
        <DraggableTextInput />
        <DraggableTimeInput />
        <DraggableDateTimeInput />
        <DraggableDateInput />
      </div>
      {/* droppable form container */}
      <div className="min-h-min overflow-y-auto">
        <div className="h-[297mm] w-[210mm] scale-[0.7] bg-white pt-10 text-center text-titleColor outline-dashed">
          <input
            className="w-fit bg-red-500 text-center ring-0"
            type="text"
            placeholder="Form Title"
            id="form-title"
            name="form-title"
          />
        </div>
      </div>
    </div>
  );
};

export default page;

import { NewInputProps } from "@/types";
import React from "react";

const NewLabeledInput = ({ inputType, id }: NewInputProps) => {
  
  return (
    <div className="flex w-fit scale-[0.7] z-50 flex-col gap-1 px-8 py-2 text-titleColor">
      <input
        className="px-1 py-0.5"
        type="text"
        id={`${inputType}__title-${id}`}
        name={`${inputType}__title-${id}`}
        placeholder={`${inputType} input title`}
      />
      <p className="select-none bg-white text-center opacity-75">
        {inputType} input
      </p>
    </div>
  );
};

export default NewLabeledInput;

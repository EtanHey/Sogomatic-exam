import { LabeledInputProps } from "@/types";
import React from "react";

const LabeledInput = ({ title, id, inputType, options }: LabeledInputProps) => {
  return (
    <div className="flex  w-fit flex-col gap-1 px-8 py-2 text-titleColor">
      <label htmlFor={id} className="font-semibold ">
        {title}
      </label>
      <input className="px-1 py-0.5" type={inputType} id={id} {...options} />
    </div>
  );
};

export default LabeledInput;

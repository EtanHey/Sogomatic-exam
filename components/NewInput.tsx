import { NewInputProps } from "@/types";
import React, { useState } from "react";

const NewLabeledInput = ({ inputType, id }: NewInputProps) => {
  const [value, setValue] = useState("");
  return (
    <>
      <input
        className="px-1 py-0.5"
        type="text"
        id={`${inputType}__title-${id}`}
        name={`${inputType}__title-${id}`}
        placeholder={`${inputType} input title`}
        value={value}
        onChange={(ev) => {
          console.log(ev);

          setValue(ev.target.value);
        }}
      />
      <p className="select-none bg-white text-center opacity-75">
        {inputType} input
      </p>
    </>
  );
};

export default NewLabeledInput;

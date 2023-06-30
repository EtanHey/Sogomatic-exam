import React from "react";
import LabeledInput from "../LabeledInput";
import { InputProps } from "@/types";

const TextInput = ({ title = "First name" }: InputProps) => {
  return (
    <>
      <LabeledInput id="text" inputType="text" options={{}} title={title} />
    </>
  );
};

export default TextInput;

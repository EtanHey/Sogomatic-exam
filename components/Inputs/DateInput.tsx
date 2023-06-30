import React from "react";
import LabeledInput from "../LabeledInput";
import { InputProps } from "@/types";

const DateInput = ({ title = "Date of birth" }: InputProps) => {
  return (
    <>
      <LabeledInput id="date" inputType="date" options={{}} title={title} />
    </>
  );
};

export default DateInput;

import React from "react";
import LabeledInput from "../LabeledInput";
import { InputProps } from "@/types";

const TimeInput = ({ title = "Time of the event" }: InputProps) => {
  return (
    <>
      <LabeledInput id="time" inputType="time" options={{}} title={title} />
    </>
  );
};

export default TimeInput;

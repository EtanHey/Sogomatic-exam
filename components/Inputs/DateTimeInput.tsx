import React from "react";
import LabeledInput from "../LabeledInput";
import { InputProps } from "@/types";

const DateTimeInput = ({
  title = "Date and time of the event",
}: InputProps) => {
  return (
    <>
      <LabeledInput
        id="date-time"
        inputType="datetime-local"
        options={{}}
        title={title}
      />
    </>
  );
};

export default DateTimeInput;

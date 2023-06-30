import React from "react";
import LabeledInput from "../LabeledInput";
import { InputProps } from "@/types";

const EmailInput = ({ title = "Email" }: InputProps) => {
  return (
    <>
      <LabeledInput
        id="email"
        inputType="email"
        options={{
          placeholder: "xyz@example.com",
        }}
        title={title}
      />
    </>
  );
};

export default EmailInput;

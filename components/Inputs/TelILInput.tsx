import React from "react";
import LabeledInput from "../LabeledInput";
import { InputProps } from "@/types";

const TelILInput = ({ title = "Phone number" }: InputProps) => {
  return (
    <>
      <LabeledInput
        id="phone"
        inputType="tel"
        options={{
          pattern: "[0]{1}[5]{1}[0-9]{1}-?[0-9]{7}",
          placeholder: "05x-xxxxxxx",
        }}
        title={title}
      />
    </>
  );
};

export default TelILInput;

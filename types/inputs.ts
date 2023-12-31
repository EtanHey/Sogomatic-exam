import { DraggableInput } from "@/features/formCreator/formCreator.types";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export type InputProps = { title?: string };

export type LabeledInputProps = {
  title: string;
  id: string;
  inputType: HTMLInputTypeAttribute;
  options?: InputHTMLAttributes<HTMLInputElement>;
};

export type NewInputProps = {
  input: DraggableInput;
};

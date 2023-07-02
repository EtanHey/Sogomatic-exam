import { NewInputProps } from "@/types";
import { Input } from "@prisma/client";
import { CSSProperties, HTMLInputTypeAttribute } from "react";

export type DraggableInput = {
  id: string;
  title: string;
  type: HTMLInputTypeAttribute;
  position: {
    x: number;
    y: number;
  };
};

export enum FormCreatorStatus {
  IDLE = "idle",
  LOADING = "loading",
  FAILED = "failed",
}

export type NewFormInfo = {
  title: string;
  inputs: DraggableInput[];
};

export type DbFormInfo = {
  _id: string;
  title: string;
  inputs: DraggableInput[];
};
export type FormInfo = {
  id: string;
  title: string;
  inputs: DraggableInput[];
};

export type DraggableInputProps = {
  styles: CSSProperties;
  input: DraggableInput;
};

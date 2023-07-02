import {
  updateInputsName,
  selectInputsTitle,
} from "@/features/formCreator/formCreatorSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { NewInputProps } from "@/types";
import React from "react";

const NewLabeledInput = ({ input }: NewInputProps) => {
  const { type, id, position } = input;
  const dispatch = useAppDispatch();
  const currentInputsTitle =
    useAppSelector((state) => selectInputsTitle(state, id)) || "";
  return (
    <>
      <input
        className="px-1 py-0.5"
        type="text"
        disabled={
          position.x < 320 ||
          position.x > 770 ||
          position.y < 15 ||
          position.y > 735
        }
        id={`${type}__title-${id}`}
        name={`${type}__title-${id}`}
        placeholder={`${type} input title`}
        value={currentInputsTitle}
        onChange={(ev) => {
          dispatch(updateInputsName({ title: ev.target.value, id: id }));
        }}
      />
      <p className="select-none bg-white text-center opacity-75">
        {type} input
      </p>
    </>
  );
};

export default NewLabeledInput;

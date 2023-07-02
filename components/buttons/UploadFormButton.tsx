"use client";
import { NewFormInfo } from "@/features/formCreator/formCreator.types";
import {
  addFormToLibrary,
  selectFormCreatorNewForm,
} from "@/features/formCreator/formCreatorSlice";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import React, { BaseSyntheticEvent } from "react";

const UploadNewFormButton = () => {
  const currentForm = useAppSelector(selectFormCreatorNewForm);
  const handleUploadNewForm = async (ev: BaseSyntheticEvent) => {
    ev.preventDefault();
    // try {
    //   let { title, inputs } = currentForm;
    //   if (!title || !inputs) throw new Error("All fields are required");

    //   const newForm: NewFormInfo = {
    //     title,
    //     inputs,
    //   };
    //   const {
    //     data: { createdForm, error },
    //   } = await axios.post("/create-form/controls", {
    //     newForm,
    //   });
    //   if (error) throw new Error(error);
    //   if (createdForm) {
    //     dispatch(addFormToLibrary(createdForm));
    //    }
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <button
      className="absolute bottom-0 left-0 h-20 w-64 text-white bg-blue-400"
      onClick={handleUploadNewForm}
    >
      Upload form
    </button>
  );
};

export default UploadNewFormButton;

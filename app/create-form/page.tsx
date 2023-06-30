"use client";
import { DraggableDateInput, DraggableDateTimeInput, DraggableEmailInput, DraggableTelIL, DraggableTextInput, DraggableTimeInput } from "@/components/draggableInputs";
import {
  DateInput,
  DateTimeInput,
  EmailInput,
  TelIL,
  TextInput,
  TimeInput,
} from "@/components/inputs";

import React, { BaseSyntheticEvent } from "react";

const page = () => {
  const handleFormCreation = (event: BaseSyntheticEvent) => {
    event.preventDefault();
    console.log(event.target.elements);
  };
  return (
    <form className="flex flex-wrap" onSubmit={handleFormCreation}>
      <TelIL />
      <EmailInput />
      <TextInput />
      <TimeInput />
      <DateTimeInput />
      <DateInput />
      <DraggableTelIL/>
      <DraggableEmailInput/>
      <DraggableTextInput/>
      <DraggableTimeInput/>
      <DraggableDateTimeInput/>
      <DraggableDateInput/>
      <button type="submit">submit</button>
    </form>
  );
};

export default page;

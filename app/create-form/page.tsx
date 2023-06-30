"use client";
import {
  DateInput,
  DateTimeInput,
  EmailInput,
  TelIL,
  TextInput,
  TimeInput,
} from "@/components/Inputs";

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
      <button type="submit">submit</button>
    </form>
  );
};

export default page;

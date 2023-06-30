import { LayoutProps } from "@/types";
import React from "react";

export const metadata = {
  title: "Create a form",
  description: "Create a new form for the database",
};

const CreateFormLayout = async ({ children }: LayoutProps) => {
  return <main className="h-full bg-gray-400">{children}</main>;
};

export default CreateFormLayout;

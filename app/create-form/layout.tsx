import { LayoutProps } from "@/types";
import React from "react";

export const metadata = {
  title: "Create a form",
  description: "Create a new form for the database",
};

const CreateFormLayout = async ({ children }: LayoutProps) => {
  return (
    <main className="h-0 min-h-full max-h-screen  overflow-clip bg-[#f6f6f6]">
      {children}
    </main>
  );
};

export default CreateFormLayout;


import Link from "next/link";
import React from "react";

const CreateNewForm = async () => {
  
  return (
    <Link
      href={"/create-form"}
      className="h-fit w-20 min-w-fit rounded-[10px] bg-gradient-to-r from-buttonLeftColor to-buttonRightColor font-bold text-white"
    >
      Create a new form
    </Link>
  );
};

export default CreateNewForm;

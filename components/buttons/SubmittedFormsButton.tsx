import Link from "next/link";
import React from "react";

const SubmittedFormsButton = async () => {
  return (
    <Link
      href={"#"}
      className="h-fit w-20 min-w-fit rounded-[10px] border-2 border-buttonFillNBorder bg-buttonFillNBorder hover:bg-buttonFillNBorder/90 px-8 py-2 font-extrabold text-white"
    >
      submitted Forms
    </Link>
  );
};

export default SubmittedFormsButton;

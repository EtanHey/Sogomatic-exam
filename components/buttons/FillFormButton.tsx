import Link from "next/link";
import React from "react";

const FillFormButton = async () => {
  return (
    <Link
      href={"#"}
      className="h-fit py-2 px-8 w-52 min-w-fit rounded-[10px] border-2 border-buttonFillNBorder font-extrabold text-buttonFillNBorder hover:bg-buttonFillNBorder/[0.15]"
    >
      Fill a form
    </Link>
  );
};

export default FillFormButton;

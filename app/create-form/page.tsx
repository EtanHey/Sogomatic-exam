import DnDArea from "@/components/DnD/DnDArea";
import UploadNewFormButton from "@/components/buttons/UploadFormButton";
import { getInputs } from "@/lib/inputsCont";
import React from "react";

const page = async () => {
  const { inputs, error } = await getInputs();

  if (error || inputs?.length === 0 || !inputs) {
    return <div>No inputs were found</div>;
  } else {
    return (
      <div className="flex h-full w-min flex-row place-items-center text-textColor">
        <DnDArea inputs={inputs} />
        <UploadNewFormButton />
      </div>
    );
  }
};

export default page;

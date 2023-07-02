import { Form } from "@prisma/client";
import { prisma } from ".";
import { NewFormInfo } from "@/features/formCreator/formCreator.types";

export async function createForm(
  newForm: NewFormInfo
): Promise<{ createdForm?: Form; error?: any }> {
  try {
    const createdForm = await prisma.form.create({
      data: {title: newForm.title, inputs:},
    });
    console.log(createdForm);
    
    return { createdForm };
  } catch (error) {
    console.log(error);
    
    return { error };
  }
}

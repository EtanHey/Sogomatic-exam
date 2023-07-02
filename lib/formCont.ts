import { Form } from "@prisma/client";
import { prisma } from ".";

export async function createForm(
  newForm: Omit<Form, "id">
): Promise<{ createdForm?: Form; error?: any }> {
  try {
    const createdForm = await prisma.form.create({
      data: newForm,
    });
    console.log(createdForm);
    
    return { createdForm };
  } catch (error) {
    console.log(error);
    
    return { error };
  }
}

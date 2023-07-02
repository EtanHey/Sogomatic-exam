import { Input } from "@prisma/client";
import { prisma } from ".";
export async function getInputs(): Promise<{
  inputs?: Input[];
  error?: any;
}> {
  try {
    const inputs = await prisma.input.findMany();
    console.log(inputs);

    return { inputs };
  } catch (error) {
    return { error };
  }
}

import { createForm } from "@/lib/formCont";

export async function POST(req: any) {
    try {
      const { newForm } = await req.json();
      console.log(`newForm`, newForm);
      
      const { createdForm, error } = await createForm(newForm);
      if (error) throw new Error(`${error}`);
      console.log(error);
      
      return new Response(JSON.stringify({ createdForm }), {
        status: 200,
      });
    } catch (error: any) {
      return new Response(JSON.stringify({ error: `${error.message}` }), {
        status: 500,
      });
    }
  }
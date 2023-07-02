import CreateNewFormButton from "@/components/buttons/CreateNewFormButton";
import FillFormButton from "@/components/buttons/FillFormButton";
import SubmittedFormsButton from "@/components/buttons/SubmittedFormsButton";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col justify-around gap-12 overflow-clip bg-white p-8 text-center">
      <h1 className="text-3xl font-bold text-titleColor sm:text-4xl">
        Sogomatic's{" "}
        <span className="text-buttonRightColor">form generator</span>
      </h1>
      <h2 className="w-full text-2xl font-bold text-titleColor sm:text-3xl">
        please choose one of the following options:
      </h2>
      <div className="flex h-fit w-full flex-col items-center gap-y-10 text-center">
        <CreateNewFormButton />
        <FillFormButton />
        <SubmittedFormsButton />
      </div>
    </main>
  );
}

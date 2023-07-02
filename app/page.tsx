import CreateNewForm from "@/components/buttons/CreateNewForm";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col gap-12 overflow-clip bg-white p-8 text-center">
      <h1 className="text-3xl font-bold text-titleColor sm:text-4xl">
        Sogomatic's form generator
      </h1>
      <h2 className="w-full text-2xl font-bold text-titleColor sm:text-3xl">
        please choose one of the following options:
      </h2>
      <div className="flex h-fit w-full flex-col gap-y-10 text-center">
        <CreateNewForm />
        <button className="text-textColor">Fill a form</button>
        <button className="text-textColor">Submitted forms</button>
      </div>
    </main>
  );
}

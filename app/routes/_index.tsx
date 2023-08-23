import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Aaron Pettengill, Full-stack Developer" },
    {
      name: "description",
      content:
        "Aaron Pettengill is a full-stack developer with an emphasis on frontend and JavaScript.",
    },
  ];
};

export default function Index() {
  return (
    <div className="h-screen flex flex-col justify-center bg-gradient-to-tr from-slate-100 to-sky-300">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-sky-900 sm:text-5xl">
          Aaron Pettengill
        </h1>
        <h2 className="text-xl font-bold tracking-tight text-sky-700 sm:text-4xl">
          Full-stack Developer
        </h2>
        <div className="text-sm mt-6 text-slate-500 flex justify-center">
          Testing
        </div>
      </div>
    </div>
  );
}

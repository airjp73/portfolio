import type { V2_MetaFunction } from "@remix-run/node";
import { motion } from "framer-motion";
import { type PropsWithChildren } from "react";

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

const AppearingText = ({ text, delay }: { text: string; delay: number }) => {
  const chars = text.split("");

  const charVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <motion.span
      className="flex"
      transition={{
        delayChildren: delay,
        staggerChildren: 0.05,
      }}
      variants={{ hidden: {}, visible: {} }}
    >
      {chars.map((char, index) => {
        if (char === " ") return <div key={index} className="w-2" />;
        return (
          <motion.div key={index} variants={charVariants}>
            {char}
          </motion.div>
        );
      })}
    </motion.span>
  );
};

export default function Index() {
  return (
    <div className="h-screen bg-gradient-to-tr from-sky-300 via-sky-100 to-sky-200 flex items-center justify-center">
      <div className="flex space-x-4 items-center">
        <img
          src="/headshot.webp"
          className="rounded-full w-32 h-32 mx-auto mb-4 shadow-md"
          alt=""
        />
        <div>
          <h1 className="text-4xl tracking-tight text-sky-600 font-semibold sm:text-5xl drop-shadow-md">
            Aaron Pettengill
          </h1>
          <h2 className="text-xl tracking-tight text-sky-600 font-thin sm:text-4xl drop-shadow-md">
            Full-stack Developer
          </h2>
        </div>
      </div>
    </div>
  );
}

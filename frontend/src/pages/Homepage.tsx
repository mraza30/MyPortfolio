import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import { RubberBand } from "../components/Animated";

function Homepage() {
  return (
    <div className="flex h-screen justify-center overflow-hidden md:ml-40 md:justify-start">
      <div className="background flex h-full flex-col justify-around">
        <div>
          <h5>{`<html>`}</h5>
          <h5>{`<body>`}</h5>
        </div>

        <div className="ml-5">
          <h5>{`<h1>`}</h5>
          <span className="ml-5 inline-block">
            <Greeting />
          </span>
          <h5 className="inline">{`</h1>`}</h5>

          <h5>{`<p>`}</h5>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="ml-5 inline-block font-Oswald text-lg font-light tracking-widest text-zinc-300 md:text-2xl"
          >
            MERN Stack Developer
          </motion.span>
          <h5>{`</p>`}</h5>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="fill mt-5 ml-5 border border-cyan-400 px-10 py-2 font-Oswald text-lg font-extralight tracking-widest text-cyan-400 hover:text-black md:text-2xl"
          >
            Contact me!
          </motion.button>
        </div>

        <div>
          <h5>{`</html>`}</h5>
          <h5>{`</body>`}</h5>
        </div>
      </div>
    </div>
  );
}

function Greeting() {
  const sentence = `Hi,\nI'm Mughees,\nweb developer`.split("");
  return (
    <>
      {sentence.map((char, index) =>
        char === "\n" ? (
          <br key={index} />
        ) : char === "M" ? (
          <motion.img
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: index / 20, duration: 0.5 }}
            src="/mughees.png"
            className="-mt-4 inline-block w-8 md:-mt-11 md:w-16"
            key={index}
          />
        ) : (
          <motion.span
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index / 20, duration: 0.5 }}
            className="inline-block"
            key={index}
          >
            <RubberBand
              className="font-Archivo text-3xl text-white hover:text-cyan-400 md:text-6xl"
              delay={index / 20}
            >
              {char}
            </RubberBand>
          </motion.span>
        )
      )}
    </>
  );
}

export { Homepage };

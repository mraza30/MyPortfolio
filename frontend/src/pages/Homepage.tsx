import { motion, useAnimationControls } from "framer-motion";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RubberBand } from "../components/Animated";

function Homepage() {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen justify-center overflow-hidden md:ml-40 md:justify-between">
      <div className="background flex select-none flex-col justify-center">
        <div>
          <h5>{`<html>`}</h5>
          <h5>{`<body>`}</h5>
        </div>

        <div className="my-20 ml-5">
          <h5>{`<h1>`}</h5>
          <span className="ml-5 inline-block">
            <Greeting />
          </span>
          <h5 className="inline">{`</h1>`}</h5>

          <h5>{`<p>`}</h5>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="ml-5 inline-block font-Oswald text-lg font-light tracking-widest text-zinc-300 md:text-2xl"
          >
            Full Stack Developer
          </motion.span>
          <h5>{`</p>`}</h5>

          <motion.button
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.5 }}
            className="fill mt-5 ml-5 border border-teal-300 px-10 py-2 font-Oswald text-lg font-extralight tracking-widest text-teal-300 hover:text-black md:text-2xl"
            onClick={() => navigate("/contactme")}
          >
            Contact me!
          </motion.button>
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
            initial={{ x: -50, rotate: 180, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            transition={{ delay: index / 20, duration: 0.5 }}
            src="/mughees.png"
            className="-mt-5 inline-block w-8 md:-mt-11 md:w-16"
            key={index}
          />
        ) : (
          <motion.span
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index / 20, duration: 0.5 }}
            className="inline-block"
            key={index}
          >
            <RubberBand
              className="font-Archivo text-4xl text-white hover:text-teal-300 md:text-6xl"
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

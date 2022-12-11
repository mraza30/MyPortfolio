import { motion } from "framer-motion";
import React from "react";
import { ContactForm } from "../components";
import { RubberBand } from "../components/Animated";

export function Contactpage() {
  return (
    <div className="flex h-screen justify-center overflow-hidden md:ml-40 md:justify-between">
      <div className="background flex w-11/12 max-w-md select-none flex-col justify-center lg:max-w-xl">
        <div className="">
          <h5>{`<html>`}</h5>
          <h5>{`<body>`}</h5>
        </div>

        <div className="md:ml-5">
          <h5>{`<h1>`}</h5>
          <span className="ml-5 inline-block">
            <ContactMe />
          </span>
          <h5 className="inline">{`</h1>`}</h5>

          <h5>{`<p>`}</h5>
          <p className="ml-5 text-justify font-Oswald text-sm font-light tracking-wide text-white md:text-xl">
            I’m interested in freelance opportunities – especially ambitious or
            large projects. However, if you have other request or question,
            don’t hesitate to use the form.
          </p>
          <h5>{`</p>`}</h5>
          <h5>{`</form>`}</h5>
          <div className="my-4 ml-5">
            <ContactForm />
          </div>
          <h5>{`</form>`}</h5>
        </div>
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <>
      {"Contact me".split("").map((char, index) => (
        <motion.span
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index / 20, duration: 0.5 }}
          className="inline-block"
          key={index}
        >
          <RubberBand
            className="font-Archivo text-4xl text-teal-300 hover:text-teal-400 md:text-6xl"
            delay={index / 20}
          >
            {char}
          </RubberBand>
        </motion.span>
      ))}
    </>
  );
}

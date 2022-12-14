import { motion } from "framer-motion";
import React from "react";
import { ContactForm } from "../components";
import { RubberBand } from "../components/Animated";

export function Contactpage() {
  return (
    <div className="grid min-h-screen md:ml-40 lg:grid-cols-2">
      <div className="background mx-auto flex min-h-screen w-11/12 flex-col justify-center md:mx-0 ">
        <div>
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
          <p className="ml-5 text-justify font-Oswald font-light tracking-wider text-white md:text-xl">
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

      <div className="m-auto h-72 w-11/12 pb-5 lg:h-full lg:w-full lg:pb-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217759.48983041072!2d74.1943040183925!3d31.48315688388588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1670778550108!5m2!1sen!2s"
          className="h-full w-full invert"
          allowFullScreen={false}
          loading="lazy"
        />
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
            className="font-Archivo text-4xl text-teal-300 hover:text-teal-400 md:text-5xl"
            delay={index / 20}
          >
            {char}
          </RubberBand>
        </motion.span>
      ))}
    </>
  );
}

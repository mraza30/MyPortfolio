import React from "react";
import { Formik, Field, Form } from "formik";
import { motion } from "framer-motion";

export function ContactForm() {
  const commonClass =
    " md:h-12 bg-zinc-800 h-10 outline-none px-2 text-zinc-200 tracking-wider placeholder:text-zinc-300 ";
  const classUpper = " w-1/2 ";
  return (
    <Formik
      initialValues={{ fullname: "", subject: "", email: "", message: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {(formik) => (
        <Form className="flex flex-col gap-3 font-Oswald font-light">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex gap-2"
          >
            <Field
              className={classUpper + commonClass}
              name="fullname"
              type="text"
              placeholder="Full Name"
              required
            />

            <Field
              className={classUpper + commonClass}
              name="email"
              type="email"
              placeholder="Email"
              required
            />
          </motion.div>

          <motion.input
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className={commonClass}
            type="text"
            placeholder="Subject"
            {...formik.getFieldProps("subject")}
            required
          />

          <motion.textarea
            placeholder="Message"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="h-32 resize-none bg-zinc-800 px-2 tracking-wider  text-zinc-200 outline-none placeholder:text-zinc-300"
            id="message"
            {...formik.getFieldProps("message")}
            required
          />

          <motion.div
            initial={{ y: 70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex h-10 justify-end md:h-12"
          >
            <button
              placeholder="Message"
              type="submit"
              className="fill w-1/2 border border-teal-300 tracking-widest text-teal-300 hover:text-black"
            >
              Submit
            </button>
          </motion.div>
        </Form>
      )}
    </Formik>
  );
}

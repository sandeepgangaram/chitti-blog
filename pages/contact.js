import React from "react";
import Head from "next/head";
import ContactForm from "../components/contact/ContactForm";

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Send me your messages with your email ids, i will respsond in day or two. Let's discuss ideas!"
        />
      </Head>
      <ContactForm />
    </>
  );
};

export default ContactPage;

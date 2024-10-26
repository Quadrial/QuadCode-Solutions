import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxgd506", // Your EmailJS service ID
        "template_635tj3f", // Your EmailJS template ID
        form.current,
        "O1OwyVHPWJe-j6Lms" // Your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email.");
        }
      );
  };

  return (
    <section
      name="contactSection"
      className="text-Header flex flex-col items-center"
    >
      <main className="text-center">
        <div className="htext">CONTACT</div>
        <p className="btext">
          Contact me for collaborations and freelance work
        </p>
      </main>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-5 w-[300px] md:w-[600px] lg:w-[700px]"
      >
        <div className="flex flex-col gap-2">
          <label className="btext">Name</label>
          <div className="animated-border border outline-none bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          <input
            type="text"
            name="user_name" // Make sure this matches the template variable
            required
            placeholder="Enter Your Name"
            className="w-full p-2 rounded-md outline-none"
          /></div>
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <label className="btext">Email</label>
          <div className="animated-border border outline-none bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          <input
            type="email"
            name="user_email" // Make sure this matches the template variable
            required
            placeholder="Enter Your Email"
            className="w-full p-2 rounded-md outline-none"
          /></div>
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <label className="btext">Message</label>
          <div className="animated-border border outline-none bg-gradient-to-r from-purple-600 via-blue-500 to-pink-500">
          <textarea
            name="message" // Make sure this matches the template variable
            required
            placeholder="Enter Your Message"
            className="w-full p-4 rounded-md outline-none"
          /></div>
        </div>

        
        <button type="submit" value="Send" className="btn mt-5">
        💌 SEND 💌
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

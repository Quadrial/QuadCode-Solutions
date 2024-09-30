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
          <label>Name</label>
          <input
            type="text"
            name="user_name" // Make sure this matches the template variable
            required
            placeholder="Enter Your Name"
            className="p-4 h-[50px] rounded-lg"
          />
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <label>Email</label>
          <input
            type="email"
            name="user_email" // Make sure this matches the template variable
            required
            placeholder="Enter Your Email"
            className="p-4 h-[50px] rounded-lg"
          />
        </div>
        <div className="mt-10 flex flex-col gap-2">
          <label>Message</label>
          <textarea
            name="message" // Make sure this matches the template variable
            required
            placeholder="Enter Your Message"
            className="p-4 h-[200px] rounded-lg"
          />
        </div>
        <button type="submit" value="Send" className="btn mt-5">
          SEND
        </button>
      </form>
    </section>
  );
};

export default ContactForm;

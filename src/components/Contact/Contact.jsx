import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_axbtt7a",
        "template_1ziboq3",
        form.current,
        "Rz7W9pVF0HdDryNNL"
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          toast.success("Message sent successfully!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[10vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or
          questions!
        </p>
      </div>

      {/* Contact Info + Form Container */}
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-6xl bg-[#0d081f] p-8 rounded-xl shadow-xl border border-gray-700">
        {/* Contact Information */}
        <div className="flex-1 text-white space-y-6">
          <h3 className="text-2xl font-bold mb-4 border-b border-purple-500 pb-2">
            Contact Info
          </h3>
          <div>
            <p className="text-gray-300">📞 Phone:</p>
            <p className="text-lg font-medium">+8801757532012</p>{" "}
            {/* Replace with your phone */}
          </div>
          <div>
            <p className="text-gray-300">📧 Email:</p>
            <p className="text-lg font-medium">
              mutashamahiya678@gmail.com
            </p>{" "}
            {/* Replace with your email */}
          </div>
          <div>
            <p className="text-gray-300">📍 Location:</p>
            <p className="text-lg font-medium">Dhaka, Bangladesh</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white text-center lg:text-left">
            Send Me a Message
          </h3>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

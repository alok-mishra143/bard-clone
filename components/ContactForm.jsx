"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });

    const { errors, success: isSuccess } = await res.json();
    setErrors(errors);
    setSuccess(isSuccess);

    if (isSuccess) {
      setFullname("");
      setEmail("");
      setMessage("");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5 max-w-md mx-auto text-black"
      >
        <div>
          <label htmlFor="fullname" className="text-white">
            Full Name
          </label>
          <input
            onChange={(e) => setFullname(e.target.value)}
            value={fullname}
            type="text"
            id="fullname"
            placeholder="John Doe"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            id="email"
            placeholder="john@gmail.com"
            className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="text-white">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className="border border-gray-300 rounded px-3 py-2 w-full h-32 focus:outline-none focus:border-blue-500"
            id="message"
            placeholder="Type your message here..."
          ></textarea>
        </div>

        <button
          className="bg-green-700 p-3 text-white font-bold rounded hover:bg-green-600"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>

      <div className="bg-gray-100 flex flex-col max-w-md mx-auto">
        {errors &&
          errors.map((error, index) => (
            <div
              key={index}
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {error}
            </div>
          ))}
        {success && !isSubmitting && (
          <div className="text-green-800 px-5 py-2">Sent successfully</div>
        )}
      </div>
    </>
  );
}

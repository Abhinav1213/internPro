import React, { useState } from "react";
import './Faq.css'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus.",
    },
    {
      question: "How do you make holy water?",
      answer: "You boil the hell out of it.",
    },
    {
      question: "What do you call someone with no body and no nose?",
      answer: "Nobody knows.",
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer: "Because they're so good at it.",
    },
    {
      question: "Why can't you hear a pterodactyl go to the bathroom?",
      answer: "Because the 'P' is silent.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8" id="FAQs">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
        Frequently asked questions
      </h2>
      <div className="faq-bg space-y-6 px-6 py-8 rounded-lg">
  {faqs.map((faq, index) => (
    <div key={index} className="border-b border-gray-300 pb-6">
      <button
        onClick={() => toggleFAQ(index)}
        className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <span className="pr-4 text-sm sm:text-lg/8">{faq.question}</span>
        <span
          className={`text-gray-500 text-2xl font-semibold ${
            openIndex === index ? "rotate-180" : ""
          } transition-transform`}
        >
          {openIndex === index ? "-" : "+"}
        </span>
      </button>
      {openIndex === index && (
        <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-lg/8">{faq.answer}</p>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default FAQ;

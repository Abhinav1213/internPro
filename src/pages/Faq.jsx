import React, { useState } from "react";
import "./Faq.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What makes Skylife Research unique?",
      answer: "Skylife Research combines advanced network analysis and quantitative finance techniques to deliver high-performance investment strategies. Our focus on community detection and graph theory sets us apart in the financial industry.",
    },
    {
      question: "What is network analysis, and how does it benefit investors?",
      answer: "Network analysis involves mapping relationships between stocks to identify clusters and patterns. This approach uncovers hidden market dynamics, helping investors make more informed decisions.",
    },
    {
      question: "How does Skylife Research ensure the reliability of its strategies?",
      answer: "We use robust backtesting engines and rigorous validation methods to ensure our strategies are reliable, risk-adjusted, and scalable in real-world market conditions.",
    },
    {
      question: "What types of clients do you work with?",
      answer: "We cater to individual investors, institutional clients, and portfolio managers looking for innovative, data-driven investment solutions tailored to their unique goals.",
    },
    {
      question: "How can I get started with Skylife Research?",
      answer: "Contact us through our website or email to discuss your investment goals. Our team will guide you through our process and help you design a strategy that aligns with your objectives.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 sm:px-10 lg:px-12 xl:px-16" id="FAQs">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10 lg:mb-14">
        Frequently Asked Questions
      </h2>
      <div className="faq-bg space-y-6 px-6 py-8 sm:px-10 sm:py-12 lg:py-16 rounded-lg">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 pb-6">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-lg lg:text-xl font-medium text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="pr-4 text-base sm:text-lg lg:text-xl">
                {faq.question}
              </span>
              <span
                className={`text-gray-500 text-xl sm:text-2xl lg:text-3xl font-semibold ${
                  openIndex === index ? "rotate-180" : ""
                } transition-transform`}
              >
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base lg:text-lg">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

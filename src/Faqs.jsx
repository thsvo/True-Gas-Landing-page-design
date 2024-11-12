import React, { useState } from "react";

const Faqs = () => {
  // State to keep track of open accordion index
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close accordion items
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2">
              <img
                src="https://i.ibb.co.com/0ybq9vh/support.jpg"
                alt="FAQ tailwind section"
                className="w-full rounded-xl object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6 className="text-lg text-center font-medium text-[#070000] mb-2 lg:text-left">
                    Faqs
                  </h6>
                  <h2 className="text-4xl text-center font-bold text-[#0b8a2d] leading-[3.25rem] mb-5 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <div className="accordion-group">
                  {[
                    {
                      question:
                        "What kind of support will I get from True Gas?",
                      answer:
                        "We provide logistical support, marketing assistance, and guidance on managing your LPG depot.",
                    },
                    {
                      question: "How much space do I need to start?",
                      answer:
                        "We’ll work with you to assess the space requirements based on the volume of cylinders you plan to handle.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className={`accordion py-8 border-b border-solid border-gray-200 ${
                        openIndex === index ? "active" : ""
                      }`}
                    >
                      <button
                        onClick={() => handleToggle(index)}
                        className="accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-indigo-600"
                        aria-expanded={openIndex === index}
                      >
                        <h5>{faq.question}</h5>
                        <svg
                          className={`text-gray-900 transition duration-500 transform ${
                            openIndex === index
                              ? "rotate-180 text-indigo-600"
                              : ""
                          }`}
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        className={`accordion-content w-full overflow-hidden transition-all duration-500 ${
                          openIndex === index ? "max-h-40" : "max-h-0"
                        }`}
                      >
                        <p className="text-base text-gray-600 font-normal mt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;

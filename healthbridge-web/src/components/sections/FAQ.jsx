import { useState } from 'react';

function FAQ() {
  const faqs = [
    {
      question: "Is ReachMed a replacement for medical advice?",
      answer: "No, ReachMed is not a replacement for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider for medical concerns."
    },
    {
      question: "How does the AI assistant work?",
      answer: "Our AI assistant uses natural language processing to understand your health questions and provide informative responses based on general health information. It does not access your personal health records or provide personalized medical advice."
    },
    {
      question: "Is my conversation private and secure?",
      answer: "Yes, we take privacy seriously. Your conversations are encrypted and we do not share your personal information with third parties. For more details, please review our Privacy Policy."
    },
    {
      question: "What languages are supported?",
      answer: "ReachMed supports multiple languages including English, Spanish, French, Mandarin, Hindi, and more. Our goal is to make health information accessible to as many people as possible."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4 mb-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-red-500 flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform ${openIndex === index ? 'rotate-180' : ''} transition-transform`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`${openIndex === index ? 'block' : 'hidden'} p-4 pt-0 bg-gray-50`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-md">
          <p className="text-red-700 font-medium">Safety Disclaimer</p>
          <p className="text-gray-700 mt-1">
            This tool does not replace professional medical advice. In case of emergency, call 911 or visit the nearest hospital.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FAQ;

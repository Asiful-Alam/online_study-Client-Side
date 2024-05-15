import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I access my study materials?',
      answer: 'You ,can access your study materials by logging into your account on our platform. '
    },
    {
      question: 'Can I download study materials for offline use?',
      answer: 'Yes, you can! We offer the option to download study materials for offline use. Simply navigate to the material you need and look for the download icon to save it to your device.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'Contacting customer support is easy. You can reach out to us via email at support@example.com or through our live chat feature available on our website. Our support team is available 24/7 to assist you with any queries or concerns.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'We accept various payment methods to make it convenient for you. You can pay using credit or debit cards, PayPal, or bank transfers. Rest assured, all transactions are secure and encrypted for your peace of mind.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md">
              <button
                className="w-full text-left p-4 bg-gray-200 hover:bg-gray-300 flex items-center justify-between focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-semibold">{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition-transform transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 6.707a1 1 0 011.414-1.414L10 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

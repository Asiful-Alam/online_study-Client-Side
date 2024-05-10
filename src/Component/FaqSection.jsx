import { useState } from 'react';

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I access my study materials?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium, dolor sed consequat ullamcorper, tortor libero rhoncus sem, ut aliquet purus risus vel lorem.',
    },
    {
      question: 'Can I download study materials for offline use?',
      answer: 'Nulla nec enim tortor. Cras tincidunt quam eget purus maximus, ut ultricies lacus suscipit. Fusce semper malesuada orci, at efficitur odio posuere eu.',
    },
    {
      question: 'How can I contact customer support?',
      answer: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquam id justo vel vehicula. Integer dapibus efficitur odio, et congue nulla.',
    },
    {
      question: 'What payment methods are accepted?',
      answer: 'Duis fringilla, risus eget lacinia convallis, ex dui pretium nibh, nec finibus mi sapien vel arcu. Integer hendrerit ante vel dolor fermentum sollicitudin.',
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

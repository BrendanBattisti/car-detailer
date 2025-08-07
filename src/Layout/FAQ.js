import Section from "../Components/Section";

const FAQ = () => {
  const faqData = [
    {
      question: "How long does a typical detail take?",
      answer:
        "Basic washes take 2-3 hours, while full details can take 4-6 hours. Ceramic coatings require 1-2 days for proper curing.",
    },
    {
      question: "Do you offer mobile services?",
      answer:
        "Yes! We offer mobile detailing services for your convenience. We can come to your home or office.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept cash, credit cards, debit cards, and digital payments including Venmo and PayPal.",
    },
    {
      question: "Do you provide warranties?",
      answer:
        "Yes, we offer satisfaction guarantees on all services and extended warranties on ceramic coatings.",
    },
  ];

  return (
    <Section id="faq" className="bg-background-900">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white">
          Frequently Asked Questions
        </h3>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-background-800 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              {faq.question}
            </h4>
            <p className="text-subtext text-sm">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default FAQ;

import Section from "../Components/Section";

const FAQ = () => {
  const faqData = [
    {
      question: "How long does a typical detail take?",
      answer:
        "Basic washes take 2-3 hours, while full details can take 4-6 hours. Ceramic coatings require 1-2 days for proper curing.",
    },
    {
      question:
        "Would you recommend getting a sealant instead of a full ceramic coating?",
      answer:
        "Ceramic coatings are a high quality option that will last for years. At Carmichael's Elite Mobile Detailing, we value quality over everything else. Our recommendation is to get a full ceramic coating and protect the value of your car for years to come.",
    },
    {
      question: "Do you offer mobile services?",
      answer:
        "Yes! We offer mobile detailing services for your convenience. We can come to your home or office.",
    },
  ];

  return (
    <Section
      id="faq"
      className="bg-background"
      title="Frequently Asked Questions"
    >
      <div className="text-center mb-8"></div>
      <div className="grid gap-6">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="animate-in bg-background-200 rounded-lg p-6"
          >
            <h4 className="text-lg font-semibold text-text mb-2">
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

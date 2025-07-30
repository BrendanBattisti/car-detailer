const Section = ({ id, children }) => {
  return (
    <section id={id} className="min-h-screen flex items-center">
      {children}
    </section>
  );
};

export default Section;

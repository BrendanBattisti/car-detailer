const Section = ({ id, title, header, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto w-3/5">
        <h4>{header}</h4>
        <h2 className="py-6">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

import React from "react";

const Section = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto max-w-6xl">{children}</div>
    </section>
  );
};

export default Section;

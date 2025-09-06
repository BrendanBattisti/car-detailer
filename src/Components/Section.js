import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section = ({ id, title, header, children, className = "" }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".section-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(".section-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        delay: 0.1,
      });
      gsap.from(".animate-in", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
        y: 18,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.08,
        delay: 0.05,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id={id} className={`py-16 px-4 ${className}`}>
      <div className="mx-auto w-full md:w-4/5 p-4">
        <h4 className="section-header">{header}</h4>
        <h2 className="section-title py-6">{title}</h2>
        {children}
      </div>
    </section>
  );
};

export default Section;

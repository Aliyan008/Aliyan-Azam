function Section({ id, className = '', children }) {
  return (
    <section
      id={id}
      className={`max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 ${className}`}
    >
      {children}
    </section>
  );
}

export default Section;

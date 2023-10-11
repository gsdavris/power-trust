const Cards = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 -mt-8 mb-16">
      <div className="grid md:grid-cols-3 gap-6">{children}</div>
    </div>
  );
};

export default Cards;

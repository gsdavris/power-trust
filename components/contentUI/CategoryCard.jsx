const CategoryCard = ({ category, mode }) => {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white aspect-square sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
        <img
          src={category.imageSrc}
          alt={category.imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3
        className={`mt-6 text-sm ${
          mode !== "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        <a href={category.href}>
          <span className="absolute inset-0" />
          {category.name}
        </a>
      </h3>
      <p
        className={`text-base font-semibold  ${
          mode !== "light" ? "text-gray-900" : "text-gray-100"
        }`}
      >
        {category.description}
      </p>
    </div>
  );
};

export default CategoryCard;

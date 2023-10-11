const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const Stats = ({ mode = "dark", textAlign = "left" }) => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`${
            textAlign === "center" ? "mx-auto text-center" : "text-left"
          } max-w-2xl mb-16`}
        >
          <h1
            className={`text-4xl font-bold ${
              mode === "light" ? "text-gray-900" : "text-gray-100"
            } tracking-tight sm:text-6xl`}
          >
            Trusted by thousands of creators worldwide
          </h1>
          <p
            className={`mt-6 text-lg leading-8 ${
              mode === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis
            ratione.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-left border-l lg:border-none lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex lg:mx-auto max-w-xs flex-col gap-y-4 lg:border-l pl-8"
            >
              <dt
                className={`text-base leading-7 ${
                  mode === "light" ? "text-gray-600" : "text-gray-300"
                }`}
              >
                {stat.name}
              </dt>
              <dd
                className={`order-first text-3xl font-semibold tracking-tight ${
                  mode === "light" ? "text-gray-900" : "text-gray-100"
                } sm:text-5xl`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default Stats;

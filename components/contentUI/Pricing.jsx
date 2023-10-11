export default function Pricing({ children, mode }) {
  return (
    <div
      className={`${
        mode === "light" ? "bg-white" : "bg-gray-900"
      } py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2
            className={`text-3xl font-bold tracking-tight ${
              mode === "light" ? "text-gray-900" : "text-gray-100"
            } sm:text-4xl`}
          >
            Simple no-tricks pricing
          </h2>
          <p
            className={`mt-6 text-lg leading-8  ${
              mode === "light" ? "text-gray-600" : "text-gray-300"
            }`}
          >
            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
            quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.
          </p>
        </div>
        <div className="mx-auto w-full flex flex-wrap gap-x-4 justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}

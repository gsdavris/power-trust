import ContactButton from "./ContactButton";

const InfoText = ({
  contactModalButton = false,
  mode = "light",
  textAlign = "center",
  title = "",
  subtitle = "",
  description = "",
  cta1 = { label1: "", path1: "" },
  cta2 = { label2: "", path2: "" },
  cta3 = { label3: "", path3: "" },
}) => {
  return (
    <div className="mx-auto max-w-2xl py-16 px-4">
      <div
        className={`hidden sm:mb-8 sm:flex sm:justify-center ${
          textAlign === "left"
            ? "start"
            : textAlign === "right"
            ? "end"
            : textAlign
        }`}
      >
        {subtitle && (
          <div
            className={`relative rounded-full px-3 py-1 text-sm leading-6 ${
              mode === "light" ? "text-gray-600" : "text-gray-300"
            } ring-1 ${
              mode === "light"
                ? "ring-gray-900/10 hover:ring-gray-900/20"
                : "ring-gray-100/10 hover:ring-gray-100/20"
            }`}
          >
            {subtitle}{" "}
            {cta1.label1 && (
              <a href={cta1.path1} className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true" />
                {cta1.label1} <span aria-hidden="true">&rarr;</span>
              </a>
            )}
          </div>
        )}
      </div>
      <div className={`text-${textAlign}`}>
        <h1
          className={`text-4xl font-bold ${
            mode === "light" ? "text-gray-900" : "text-gray-100"
          } tracking-tight sm:text-6xl`}
        >
          {title}
        </h1>
        <p
          className={`mt-6 text-lg leading-8 ${
            mode === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {description}
        </p>
        <div
          className={`mt-10 flex items-center justify-${
            textAlign === "left"
              ? "start"
              : textAlign === "right"
              ? "end"
              : textAlign
          } gap-x-6`}
        >
          {contactModalButton && <ContactButton />}
          {cta2.label2 && (
            <a
              href={cta2.path2}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:shadow shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {cta2.label2}
            </a>
          )}
          {cta3.label3 && (
            <a
              href={cta3.path3}
              className={`text-sm font-semibold leading-6 ${
                mode === "light" ? "text-gray-900" : "text-gray-100"
              }`}
            >
              {cta3.label3} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoText;

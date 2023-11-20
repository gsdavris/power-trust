const AbsoluteFooter = ({ mode }) => {
  return (
    <>
      <hr className="my-6 border-gray-300" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
          <div
            className={`text-sm ${
              mode === "light" ? "text-gray-600" : "text-gray-300"
            } font-semibold py-1`}
          >
            Power Trust IKE Αρ. Γ.Ε.ΜΗ.:170623122000 Copyright ©{" "}
            {new Date().getFullYear()} powered by{" "}
            <a
              href="https://www.motify.gr"
              target="_blank"
              className="text-indigo-600 hover:text-indigo-400"
            >
              Motify Athens
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbsoluteFooter;

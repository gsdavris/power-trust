import Banner from "../contentUI/Banner";
import InfoText from "../contentUI/InfoText";

const Images2WText = ({ mode, imageUrl1, alt1, imageUrl2, alt2, ...rest }) => {
  return (
    <section>
      <div className="pt-0 pb-32 hidden lg:block bg-transparent"></div>
      <div
        className={`relative ${
          mode === "light" ? "bg-gray-100" : "bg-gray-900"
        }`}
      >
        <div className="px-6 lg:px-8 mx-auto max-w-7xl lg:flex lg:flex-wrap relative lg:-translate-y-32">
          <div className="lg:w-1/12"></div>
          <div className="lg:w-11/12 lg:mb-16">
            <Banner
              minHeight="600px"
              imageUrl={imageUrl1}
              alt={alt1}
              overlayOpacity="50"
            />
          </div>
          <div className="mb-4 relative lg:hidden mx-auto -mt-[100px] w-10/12 z-10">
            <div className="overflow-hidden relative">
              <Banner
                minHeight="600px"
                imageUrl={imageUrl2}
                alt={alt2}
                overlayOpacity="50"
              />
            </div>
          </div>
          <div className="lg:w-5/12"></div>
          <div className="lg:w-6/12">
            <InfoText mode={mode} {...rest} textAlign="left" />
          </div>
          <div
            className={`lg:p-4 lg:pl-8 lg:absolute hidden lg:block left-0 top-[440px] ${
              mode === "light" ? "bg-gray-100" : "bg-gray-900"
            } w-4/12 z-10`}
          >
            <div className="overflow-hidden relative">
              <Banner
                minHeight="600px"
                imageUrl={imageUrl2}
                alt={alt2}
                overlayOpacity="50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Images2WText;

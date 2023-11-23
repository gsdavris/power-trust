import Image from "next/image";
import Overlay from "./Overlay";

const Banner = ({ imageUrl, alt, overlayOpacity, minHeight, children }) => {
  return (
    <div
      className={`relative w-full ${minHeight} flex content-center items-center justify-center`}
    >
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
        <Image
          src={imageUrl}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          alt={alt}
        />
        <Overlay opacity={overlayOpacity} />
      </div>
      <div className="container relative">{children}</div>
    </div>
  );
};

export default Banner;

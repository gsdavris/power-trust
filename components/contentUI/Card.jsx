import Image from "next/image";
import Link from "next/link";
import { getIconByName } from "../../utils/icons";

const Card = ({
  path,
  imageUrl,
  imageHeight,
  alt,
  title,
  description,
  iconName,
  iconColor,
  iconBackground,
  mode = "light",
}) => {
  return (
    <div className="w-full text-center">
      <div
        className={`relative flex flex-col min-w-0 break-words ${
          mode === "light" ? "bg-white" : "bg-gray-900"
        } w-full hover:shadow shadow-md rounded-lg`}
      >
        {path ? (
          <Link href={path}>
            {imageUrl && alt && (
              <div
                className={`relative w-full ${imageHeight} overflow-hidden rounded-t -mb-12`}
              >
                <Image
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="z-0"
                  alt={alt}
                />
              </div>
            )}
            <div className="px-4 py-5 flex-auto">
              <div
                className={`relative text-center inline-flex items-center justify-center h-14 w-14 mb-5 hover:shadow shadow-md rounded-full ${iconBackground}`}
              >
                {getIconByName(iconName, iconColor + " h-6 w-6")}
              </div>
              <h6
                className={`text-xl font-bold ${
                  mode === "light" ? "text-gray-900" : "text-gray-100"
                } tracking-tight sm:text-2xl`}
              >
                {title}
              </h6>
              <p
                className={`mt-2 mb-4 ${
                  mode === "light" ? "text-gray-600" : "text-gray-300"
                } text-lg leading-8`}
              >
                {description}
              </p>
            </div>
          </Link>
        ) : (
          <>
            {imageUrl && alt && (
              <div
                className={`relative w-full ${imageHeight} overflow-hidden rounded-t -mb-12`}
              >
                <Image
                  src={imageUrl}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="z-0"
                  alt={alt}
                />
              </div>
            )}
            <div className="px-4 py-5 flex-auto">
              <div
                className={`relative text-center inline-flex items-center justify-center h-14 w-14 mb-5 hover:shadow shadow-md rounded-full ${iconBackground}`}
              >
                {getIconByName(iconName, iconColor + " h-6 w-6")}
              </div>
              <h6
                className={`text-xl font-bold ${
                  mode === "light" ? "text-gray-900" : "text-gray-100"
                } tracking-tight sm:text-2xl`}
              >
                {title}
              </h6>
              <p
                className={`mt-2 mb-4 ${
                  mode === "light" ? "text-gray-600" : "text-gray-300"
                } text-lg leading-8`}
              >
                {description}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;

import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaFingerprint,
  FaAward,
  FaRetweet,
} from "react-icons/fa6";

export const getIconByName = (name, classes) => {
  const iconsMap = {
    twitter: <FaXTwitter className={classes + " text-gray-900"} />,
    facebook: <FaFacebookF className={classes + " text-blue-600"} />,
    instagram: <FaInstagram className={classes + " text-pink-700"} />,
    fingerprint: <FaFingerprint className={classes} />,
    award: <FaAward className={classes} />,
    retweet: <FaRetweet className={classes} />,
  };

  if (name in iconsMap) {
    const IconComponent = iconsMap[name];
    return IconComponent;
  }
};

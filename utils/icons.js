import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaFingerprint,
  FaAward,
  FaRetweet,
} from "react-icons/fa6";

export const getIconByName = (name, color, classes) => {
  const iconsMap = {
    twitter: <FaXTwitter color={color || "#0F1419"} className={classes} />,
    facebook: <FaFacebookF color={color || "#0866FF"} className={classes} />,
    instagram: <FaInstagram color={color || "#FD3189"} className={classes} />,
    fingerprint: <FaFingerprint color={color} className={classes} />,
    award: <FaAward color={color} className={classes} />,
    retweet: <FaRetweet color={color} className={classes} />,
  };

  if (name in iconsMap) {
    const IconComponent = iconsMap[name];
    return IconComponent;
  }
};

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
    twitter: <FaXTwitter color="#0F1419" className={classes} />,
    facebook: <FaFacebookF color="#0866FF" className={classes} />,
    instagram: <FaInstagram color="#FD3189" className={classes} />,
    fingerprint: <FaFingerprint className={classes} />,
    award: <FaAward className={classes} />,
    retweet: <FaRetweet className={classes} />,
  };

  if (name in iconsMap) {
    const IconComponent = iconsMap[name];
    return IconComponent;
  }
};

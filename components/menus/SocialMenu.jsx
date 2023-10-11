import { getIconByName } from "../../utils/icons";

const SocialMenu = ({ social }) => {
  return (
    <>
      {social.map((item, index) => (
        <a
          key={index}
          className="cursor-pointer inline-flex h-14 w-14 bg-white shadow hover:shadow-lg font-normal items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
          href={item.location}
          target="_blank"
        >
          {getIconByName(item.name, "h-6 w-6")}
        </a>
      ))}
    </>
  );
};

export default SocialMenu;

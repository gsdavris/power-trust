const FooterMenu = ({ title, navigation, mode }) => {
  return (
    <>
      <span
        className={`block uppercase ${
          mode === "light" ? "text-gray-700" : "text-gray-200"
        } text-sm font-semibold mb-2`}
      >
        {title}
      </span>
      <ul className="list-unstyled">
        {navigation.map((item, index) => (
          <li key={index}>
            <a
              className={`${
                mode === "light"
                  ? "text-gray-500 hover:text-gray-800"
                  : "text-gray-400 hover:text-gray-100"
              } font-semibold block pb-2 text-sm`}
              href={item.location}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FooterMenu;

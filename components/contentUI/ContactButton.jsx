import { useContext } from "react";
import { Context } from "../../context";

const ContactButton = ({ full }) => {
  const { dispatch } = useContext(Context);

  const handleClick = () => {
    dispatch({ type: "IS_OPEN", payload: true });
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-md bg-indigo-600 px-6 py-2 ${
        full && "w-full"
      } text-sm font-semibold text-white hover:shadow shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
    >
      Επικοινωνήστε μαζί μας
    </button>
  );
};

export default ContactButton;

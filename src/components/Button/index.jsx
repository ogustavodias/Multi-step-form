// Buttons components
import Next from "./Next/index";
import Back from "./Back/index";
import Confirm from "./Confirm/index";

const Button = ({ type }) => {
  if (type === "next") return <Next />;
  else if (type === "back") return <Back />;
  else if (type === "confirm") return <Confirm />;
  else return null;
};

export default Button;

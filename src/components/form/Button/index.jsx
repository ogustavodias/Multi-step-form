import BtnBack from "./Back";
import BtnConfirm from "./Confirm";
import BtnNext from "./Next";

const Button = ({ type }) => {
  if (type === "next") return <BtnNext>Next Step</BtnNext>;
  else if (type === "back") return <BtnBack>Go Back</BtnBack>;
  else if (type === "confirm") return <BtnConfirm>Confirm</BtnConfirm>;
  else return null;
};

export default Button;

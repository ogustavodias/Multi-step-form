import React from "react";

const useUserInfo = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  function validate(value) {
    if (!value.length) {
      setError("This field is required!");
      return false;
    }

    setError(false);
    return true;
  }

  return {
    value,
    setValue,
    validate: () => validate(value),
    error,
  };
};

export default useUserInfo;

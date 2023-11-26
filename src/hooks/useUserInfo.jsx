import React from "react";

const useUserInfo = (type) => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const phoneRegex = /^\+?\d+$/;

  function validate(value, type) {
    if (!value.length) {
      setError("This field is required!");
      return false;
    }

    if (type && type === "email" && !emailRegex.test(value)) {
      setError("Invalid email");
      return false;
    }

    if (type && type === "phone" && !phoneRegex.test(value)) {
      setError("Invalid phone");
      return false;
    }

    setError(false);
    return true;
  }

  return {
    value,
    setValue,
    validate: () => validate(value, type),
    error,
  };
};

export default useUserInfo;

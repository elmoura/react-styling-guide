import React from "react";

import "./Button.css";

const Button = ({ onClick, children, ...rest }) => {
  return (
    <button className="button" onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;

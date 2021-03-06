import React from "react";

//Styles
import { Alert } from "react-bootstrap";

const Message = ({ variant = "info", children }) => {
  return (
    <div className="Message">
      <Alert variant={variant}>{children}</Alert>
    </div>
  );
};

export default Message;

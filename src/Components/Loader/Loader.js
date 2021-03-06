import React from "react";

//Styles
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="laoder">
      <Spinner
        animation="border"
        role="status"
        style={{
          width: "100px",
          height: "100px",
          margin: "auto",
          display: "block",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;

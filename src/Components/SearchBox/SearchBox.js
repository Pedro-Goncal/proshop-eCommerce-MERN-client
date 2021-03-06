import React, { useState } from "react";

//Styles
import { Form, Button } from "react-bootstrap";

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <div className="searchBox">
      <Form onSubmit={submitHandler} inline>
        <Form.Control
          type="text"
          name="q"
          placeholder="Search products..."
          className="mr-sm-2 ml-sm-5"
          onChange={(e) => setKeyword(e.target.value)}
        ></Form.Control>
        <Button type="submit" varient="outline-success" className="p-2">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;

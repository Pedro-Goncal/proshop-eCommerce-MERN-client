import React, { useState } from "react";

//Styles
import { Form, Button, FormLabel, FormControl } from "react-bootstrap";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../Redux/actions/cartActions";

//Components
import FormContainer from "../Components/FormContainer/FormContainer";
import CheckoutSteps from "../Components/CheckoutSteps/CheckoutSteps";

const ShippingScreen = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cart);

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address">
          <FormLabel>Address</FormLabel>
          <FormControl
            type="address"
            placeholder="Enter your address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Form.Group controlId="city">
          <FormLabel>City</FormLabel>
          <FormControl
            type="city"
            placeholder="Enter your city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Form.Group controlId="postalCode">
          <FormLabel>Postal Code</FormLabel>
          <FormControl
            type="postalCode"
            placeholder="Enter your Postal Code"
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></FormControl>
        </Form.Group>

        <Form.Group controlId="country">
          <FormLabel>Country</FormLabel>
          <FormControl
            type="country"
            placeholder="Enter your country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></FormControl>
        </Form.Group>
        <Button type="submit" varient="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;

import React, { useState, useEffect } from "react";

//Styles
import {
  Form,
  Row,
  Col,
  Button,
  FormLabel,
  FormControl,
  Table,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//Redux
import { useSelector, useDispatch } from "react-redux";
import {
  getUserDetails,
  updateUserProfile,
} from "../Redux/actions/userActions";
import { listMyOrders } from "../Redux/actions/orderActions";

//Components
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";

const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  //Selectors
  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.userUpdateProfile);
  const { loading: loadingOrders, error: errorOrders, orders } = useSelector(
    (state) => state.orderListMy
  );

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: "USER_UPDATE_PROFILE_RESET" });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, user, userInfo, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do no match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }
  };

  return (
    <div className="loginScreen">
      <Row>
        <Col md={3}>
          <h2>User Profile</h2>
          {error && <Message variant="danger">{error}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          {success && <Message variant="success">Profile Updated</Message>}

          {loading && <Loader />}

          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <FormLabel>Name</FormLabel>
              <FormControl
                type="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></FormControl>
            </Form.Group>

            <Form.Group controlId="email">
              <FormLabel>Email</FormLabel>
              <FormControl
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></FormControl>
            </Form.Group>

            <Form.Group controlId="password">
              <FormLabel>New Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></FormControl>
            </Form.Group>

            <Form.Group controlId="ConfirmPassword">
              <FormLabel>Confirm New Password</FormLabel>
              <FormControl
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></FormControl>
            </Form.Group>
            <Button type="submit" varient="primary">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h2>My Orders</h2>
          {loadingOrders ? (
            <Loader />
          ) : errorOrders ? (
            <Message variant="danger">{errorOrders}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        <p style={{ color: "green" }}>
                          {order.paidAt.substring(0, 10)}
                        </p>
                      ) : (
                        <p
                          style={{
                            color: "red",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          NOT PAID
                        </p>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        <div style={{ color: "green" }}>
                          {order.deliveredAt.substring(0, 10)}
                        </div>
                      ) : (
                        <p
                          style={{
                            color: "red",
                            fontSize: "10px",
                            textAlign: "center",
                          }}
                        >
                          NOT DELIVERED
                        </p>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button variant="light" className="btn-sm">
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileScreen;

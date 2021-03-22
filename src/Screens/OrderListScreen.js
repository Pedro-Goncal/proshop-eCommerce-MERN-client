import React, { useEffect } from "react";

//Styles
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

//Router

//Reduc
import { useSelector, useDispatch } from "react-redux";
import { listOrders } from "../Redux/actions/orderActions";

//Components
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.orderList);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>TOTAL</th>
              <th>PAID</th>
              <th>SENT</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>${order.totalPrice}</td>
                <td>
                  {order.isPaid ? (
                    <p style={{ color: "green" }}>
                      {order.paidAt.substring(0, 10)}
                    </p>
                  ) : (
                    <p style={{ color: "red" }}>Not Paid</p>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    <div style={{ color: "green" }}>
                      {order.deliveredAt.substring(0, 10)}
                    </div>
                  ) : (
                    <p style={{ color: "red" }}>Not Sent</p>
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
    </div>
  );
};

export default OrderListScreen;

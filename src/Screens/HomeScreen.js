import React, { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../Redux/actions/productActions";

//Styles
import { Col, Row } from "react-bootstrap";

//Router
import { Link } from "react-router-dom";

//Components
import Product from "../Components/Product/Product";
import Message from "../Components/Message/Message";
import Loader from "../Components/Loader/Loader";
import Paginate from "../Components/Paginate/Paginate";
import ProductCarousel from "../Components/ProductCarousel/ProductCarousel";
import Meta from "../Components/MetaWrapper/MetaWrapper";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      <Meta title="Welcome to ProShop || Home" />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </div>
      )}
    </div>
  );
};

export default HomeScreen;

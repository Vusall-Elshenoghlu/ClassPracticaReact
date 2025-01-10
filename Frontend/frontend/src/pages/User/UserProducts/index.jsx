import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner, Nav } from "react-bootstrap";
import { FaInfo, FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";

function UserProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function getProducts() {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error?.message || "An unknown error occurred"}</div>;

  return (
    <>
      <Container>
        <Row>
          {products.map((product) => (
            <Col md={3} className="mb-5" key={product.id}>
              <Card className="card">
                <Card.Img src={product.image} alt="Card image" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <Nav.Link href={`/products/${product.id}`}>
                      <button className="btn btn-outline-warning">
                        <FaInfo />
                      </button>
                    </Nav.Link>
                    <button className={"btn mx-2 btn-success"}>
                      <FaHeart />
                    </button>
                    <button className="btn btn-outline-danger">
                      Add <FaShoppingCart />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default UserProducts;

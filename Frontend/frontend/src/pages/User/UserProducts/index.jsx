import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner, Nav } from "react-bootstrap";
import { FaInfo, FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2"

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
  function handleDelete(id) {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .delete(`http://localhost:3000/api/products/${id}`)
                .then(() => {
                    // Silinən məhsulu siyahıdan çıxar
                    setProducts(products.filter((product) => product._id !== id));
                    Swal.fire("Deleted!", "Product has been deleted.", "success");
                })
                .catch((error) => {
                    console.error("Delete error:", error);
                    Swal.fire("Error!", "Failed to delete product.", "error");
                });
        }
    });
}

  

  if (loading) return <Spinner animation="border" />;
  if (error) return <div>Error: {error?.message || "An unknown error occurred"}</div>;

  return (
    <>
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col md={3} className="mb-5" key={product.id || index}> {/* Unikal key əlavə olunur */}
              <Card className="card">
                <Card.Img src={product.image} alt="Card image" />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>Price: ${product.price}</Card.Text>
                  <Card.Text>{product.description}</Card.Text>
                  <div className="d-flex justify-content-center">
                    <Nav.Link href={`/products/${product._id}`}>
                      <button className="btn btn-outline-warning">
                        <FaInfo />
                      </button>
                    </Nav.Link>
                    <button className={"btn mx-2 btn-success"}>
                      <FaHeart />
                    </button>
                    <button className="btn btn-outline-danger" onClick={() => handleDelete(product._id)}>
                      Delete <FaTrash />
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="d-flex justify-content-center mt-4">
          <Nav.Link href="/addproduct">
            <button className="btn btn-primary">
              Add Product
            </button>
          </Nav.Link>
        </div>
      </Container>
    </>
  );
}

export default UserProducts;

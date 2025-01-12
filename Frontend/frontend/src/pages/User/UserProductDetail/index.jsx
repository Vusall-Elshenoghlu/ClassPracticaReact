import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Container, Nav, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router'

function UserProductDetail() {
  const {id} = useParams()
  let [product, setProduct] = useState({})
  let [loading, setLoading] = useState(true)
  let [error, setError] = useState(null)

  function getProduct() {
    axios.get("http://localhost:3000/api/products/" + id)
      .then((res) => {
        setProduct(res.data.data) // Backenddən gələn data obyektinə uyğun olaraq dəyişdirin
        setLoading(false)
      })
      .catch((err) => {
        setError(err)
        setLoading(false)
      })
  }

  useEffect(() => {
    getProduct()
  }, [id]) // id dəyişdikcə yeni məhsul gətir

  if (loading) return <Spinner animation='border' />
  if (error) return <div>Error: {error.message}</div>

  return (
    <Container>
      {product && product.name && (  // `name` və ya uyğun başqa sahəni yoxlayın
        <Card className="mt-5" style={{ maxHeight: "700px", maxWidth: "300px" }}>
          <Card.Img src={product.image} alt="product image" />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title> {/* Bu sahəni dəyişdirin */}
            <Nav.Link href={`/`}>
              <button className='btn btn-outline-warning'>
                Back To Menu
              </button>
            </Nav.Link>
          </Card.Body>
        </Card>
      )}
    </Container>
  )
}

export default UserProductDetail

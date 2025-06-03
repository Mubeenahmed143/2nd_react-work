import React, { useEffect, useState } from 'react';
import { Card, Button, Row, Col, Container, Spinner } from 'react-bootstrap';

function DummyJsonComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products); // Use the 'products' array from API response
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <h2 className="text-center mb-4">Json Products</h2>
      {loading ? (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      ) : (
        <Row className="gy-4">
          {products.map((pro) => (
            <Col md={4} key={pro.id}>
              <Card
                style={{
                  width: '100%',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  borderRadius: '15px',
                  overflow: 'hidden',
                }}
                className="h-100"
              >
                <div style={{ height: '200px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={pro.thumbnail}
                    alt={pro.title}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{pro.title}</Card.Title>
                  <Card.Text className="text-muted fw-semibold">
                    ${pro.price}
                  </Card.Text>
                  <Button variant="primary" className="w-100">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}

export default DummyJsonComponent;

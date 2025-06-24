import React, { useEffect, useState, useContext } from 'react';
import { Card, Button, Row, Col, Container, Spinner, Badge, Offcanvas } from 'react-bootstrap';
import { MyContext } from './App';
import { FaShoppingCart } from 'react-icons/fa';
import ChildA from './ChildA';

function DummyJsonComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cart, setCart } = useContext(MyContext);

  // Offcanvas visibility state
  const [showCart, setShowCart] = useState(false);
  const handleClose = () => setShowCart(false);
  const handleShow = () => setShowCart(true);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      {/* Fixed Cart Icon at page top-right */}
      <div
        onClick={handleShow}
        style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          zIndex: 1000,
          cursor: 'pointer',
        }}
        title="Cart"
      >
        <FaShoppingCart size={35} />
        {cart.length > 0 && (
          <Badge
            bg="danger"
            pill
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-10px',
              fontSize: '0.8rem',
            }}
          >
            {cart.length}
          </Badge>
        )}
      </div>

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
                    <Card.Text className="text-muted fw-semibold">${pro.price}</Card.Text>
                    <Button variant="primary" className="w-100" onClick={() => handleAddToCart(pro)}>
                      Add To Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* Offcanvas for Cart */}
      <Offcanvas show={showCart} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ChildA />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default DummyJsonComponent;

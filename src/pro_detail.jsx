// import React from 'react';

import {Card, Button, Row, Col, Container } from 'react-bootstrap';

function ProductComponent(){
    const products = [
        {id: 1, name: 'Burger', price: '$10', img: 'https://thevoicemagazine.org/wp-content/uploads/2024/07/foods.jpg' },
        {id: 2, name: 'Pizza', price: '$400', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Lj3_8eh0xYQLDhyh1pYwOF6l00mL7hIfww&s' },
        {id: 3, name: 'Pasta', price: '$60', img: 'https://www.spicebangla.com/wp-content/uploads/2024/08/Spicy-Pasta-recipe-optimised-scaled.webp' },    
        {id: 4, name: 'Roll', price: '$200', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaUuzcZwWQ198llZiWZ_BERbIuC6z6MJ6oQQ&s' },
    ];

   return (
    <Container>
  <h2 className="text-center mb-4">Our Products</h2>
  <Row className="gy-4">
    {products.map((pro) => (
      <Col md={4} key={pro.id}>
        <Card style={{ width: '100%', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '15px', overflow: 'hidden' }} className="h-100">
          <div style={{ height: '200px', overflow: 'hidden' }}>
            <Card.Img
              variant="top"
              src={pro.img}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <Card.Body>
            <Card.Title>{pro.name}</Card.Title>
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
</Container>

   )


}


export default ProductComponent
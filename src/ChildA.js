import React, { useContext } from 'react';
import { MyContext } from './App';
import { ListGroup } from 'react-bootstrap';

function ChildA() {
  const { cart } = useContext(MyContext);

  return (
    <div>
      <h5>Cart Items ({cart.length})</h5>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ListGroup>
          {cart.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.title} - ${item.price}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    </div>
  );
}

export default ChildA;

import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Image, ListGroup, Row, Container } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import { CartState } from '../context/Context';
import { NavLink } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleQtyChange = (id, qty) => {
    dispatch({
      type: 'CHANGE_CART_QTY',
      payload: {
        id,
        qty,
      },
    });
  };

  const handleIncrement = (id, currentQty) => {
    handleQtyChange(id, currentQty + 1);
  };

  const handleDecrement = (id, currentQty) => {
    if (currentQty > 1) {
      handleQtyChange(id, currentQty - 1);
    }
  };

  return (
    <Container className="my-4">
      <Row>
        {/* Cart Items Section */}
        <Col md={8}>
          <ListGroup>
            {cart.map((prod) => (
              <ListGroup.Item key={prod.id} className="p-3">
                <Row className="align-items-center">
                  <Col xs={4} md={2}>
                    <Image src={prod.thumbnail} alt={prod.name} fluid rounded />
                  </Col>
                  <Col xs={8} md={3}>
                    <h6>{prod.name}</h6>
                  </Col>
                  <Col xs={4} md={2}> {prod.price} EGP</Col>
                  <Col xs={4} md={2}>
                    <div className="d-flex justify-content-between">
                      <Button
                        variant="outline-dark"
                        onClick={() => handleDecrement(prod.id, prod.qty)}
                      >
                        -
                      </Button>
                      <Form.Control
                        as="select"
                        value={prod.qty}
                        onChange={(e) => handleQtyChange(prod.id, Number(e.target.value))}
                        style={{ width: '60px' }}
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                      <Button
                        variant="outline-dark"
                        onClick={() => handleIncrement(prod.id, prod.qty)}
                      >
                        +
                      </Button>
                    </div>
                  </Col>
                  <Col xs={2} md={1}>
                    <Button
                      type="button"
                      variant="outline-danger"
                      onClick={() =>
                        dispatch({
                          type: 'REMOVE_FROM_CART',
                          payload: prod,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        {/* Summary Section */}
        <Col md={4}>
          <ListGroup className="summary">
            <ListGroup.Item>
              <h4>Subtotal ({cart.length}) items</h4>
              <h5>Total: {total} EGP</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <NavLink to="/Checkout">
                <Button
                  type="button"
                  className="btn btn-dark w-100"
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </Button>
              </NavLink>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;

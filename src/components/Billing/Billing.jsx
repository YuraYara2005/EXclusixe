import React, { useState } from "react";
import { Form, Button, Row, Col, ListGroup, Image, InputGroup, FormCheck } from "react-bootstrap";
import { CartState } from "../context/Context";
import { NavLink } from "react-router-dom";

const CheckOut = () => {
  const {
    state: { cart },
  } = CartState();

  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    email: "",
    saveBillingDetails: false,
  });

  const [couponCode, setCouponCode] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + Number(item.price) * item.qty, 0);
  const shippingFee = subtotal > 0 ? "Free" : "0";

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Billing Details:", billingDetails);
    console.log("Coupon Code:", couponCode);
  };

  return (
    <Form onSubmit={handleFormSubmit} className="container my-4">
      <Row>
        {/* Billing Details Section */}
        <Col md={6} className="mb-4">
          <h4 className="mb-4">Billing Details</h4>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your first name"
              value={billingDetails.firstName}
              onChange={(e) => setBillingDetails({ ...billingDetails, firstName: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your company name"
              value={billingDetails.companyName}
              onChange={(e) => setBillingDetails({ ...billingDetails, companyName: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Street Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter street address"
              value={billingDetails.streetAddress}
              onChange={(e) => setBillingDetails({ ...billingDetails, streetAddress: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Apartment/Floor No (Optional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="Apartment, suite, or floor"
              value={billingDetails.apartment}
              onChange={(e) => setBillingDetails({ ...billingDetails, apartment: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Town/City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter town or city"
              value={billingDetails.city}
              onChange={(e) => setBillingDetails({ ...billingDetails, city: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter your phone number"
              value={billingDetails.phoneNumber}
              onChange={(e) => setBillingDetails({ ...billingDetails, phoneNumber: e.target.value })}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email address"
              value={billingDetails.email}
              onChange={(e) => setBillingDetails({ ...billingDetails, email: e.target.value })}
              required
            />
          </Form.Group>
          <FormCheck
            type="checkbox"
            label="Save billing details for next time"
            checked={billingDetails.saveBillingDetails}
            onChange={(e) =>
              setBillingDetails({ ...billingDetails, saveBillingDetails: e.target.checked })
            }
          />
        </Col>

        {/* Cart Summary Section */}
        <Col md={6}>
          <h4 className="mb-4">Your Order</h4>
          <ListGroup variant="flush">
            {cart.length === 0 ? (
              <ListGroup.Item className="text-center">Cart is Empty</ListGroup.Item>
            ) : (
              cart.map((prod) => (
                <ListGroup.Item key={prod.id}>
                  <Row className="align-items-center">
                    <Col xs={4}>
                      <Image src={prod.image} alt={prod.name} fluid rounded />
                    </Col>
                    <Col xs={8} className="d-flex justify-content-between">
                      <span>{prod.name}</span>
                      <strong>₹ {prod.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))
            )}
            <hr />
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>₹ {subtotal}</strong>
            </ListGroup.Item>
            <ListGroup.Item className="d-flex justify-content-between">
              <span>Shipping Fee</span>
              <strong>{shippingFee}</strong>
            </ListGroup.Item>
          </ListGroup>
          <hr />
          <Form.Group className="mt-3">
            <Form.Check
              type="radio"
              label="Cash"
              name="paymentMethod"
              required
            />
            <Form.Check
              type="radio"
              label="Credit"
              name="paymentMethod"
              required
            />
          </Form.Group>
          <InputGroup className="my-3">
            <Form.Control
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <Button variant="outline-secondary" onClick={() => alert("Coupon applied!")}>
              Apply Coupon
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Button variant="dark" type="submit" className="w-10 checkout-btn mt-4">
        Submit Order
      </Button>
    </Form>
  );
};

export default CheckOut;

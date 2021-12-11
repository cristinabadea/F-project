/** @format */
import React from "react";
import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const BasketStyle = (props) => {
  const [show, setShow] = useState(false);

  const { cartItems, onAdd, onRemove } = props;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.1;
  const shippingPrice = itemsPrice > 4000 ? 0 : 39.99;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button id="my-cart-button" variant="primary" onClick={handleShow}>
        My cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <aside>
            <div>
              {cartItems.length === 0 && (
                <div>
                  Cart is <em>empty</em>!
                </div>
              )}
            </div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <div className="item-title">{item.title}</div>
                <div>
                  <button id="cart-btn" onClick={() => onAdd(item)}>
                    +
                  </button>
                  <button id="cart-btn" onClick={() => onRemove(item)}>
                    -
                  </button>
                </div>
                <div className="calc1">
                  {item.qty} x {item.price.toFixed(2)} RON
                </div>
              </div>
            ))}
            {cartItems.length !== 0 && (
              <div>
                <hr></hr>
                <div>
                  <div className="costs">Items Price</div>
                  <div>{itemsPrice.toFixed(2)} RON</div>
                </div>
                <div>
                  <div className="costs">Tax</div>
                  <div>{taxPrice.toFixed(2)} RON</div>
                </div>
                <div>
                  <div className="costs">Shipping Cost</div>
                  <div>{shippingPrice.toFixed(2)} RON</div>
                </div>
                <div className="costs">
                  <div>
                    <strong> TOTAL</strong>
                  </div>
                  <div>
                    <strong> {totalPrice.toFixed(2)} RON</strong>
                  </div>
                </div>
              </div>
            )}
            <hr />
            <div>
              <button id="checkout" onClick={() => alert("Purchase complete!")}>
                Checkout
              </button>
            </div>
          </aside>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default BasketStyle;

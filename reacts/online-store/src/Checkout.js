import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <div className="checkout__ad"></div>
        <div className="checkout__basket">
          <h2 className="checkout__title">Shopping basket</h2>

          {/* BASKET ITEM */}
          {/* BASKET ITEM */}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

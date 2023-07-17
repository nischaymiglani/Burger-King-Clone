import React from "react";

const OrderDetails = () => {
  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>
        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {"asbewfjcnd"}
          </p>
        </div>
        <div>
          <h1>Contact</h1>
          <p>
            <b>Name</b>
            {"Nischay"}
          </p>
          <p>
            <b>Phone</b>
            {"3698521470"}
          </p>
        </div>
        <div>
                <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Processing"}
                </p>
                <p>
                    <b>Placed At</b>
                    {"01:01:2023"}
                </p>
                <p>
                    <b>Delivered At</b>
                    {"08:01:2023"}
                </p>
            </div>
            <div>
                <h1>Payments</h1>
                <p>
                    <b>Method</b>
                    {"Online"}
                </p>
                <p>
                    <b>Payment Reference</b>
                    {"01:01:2023"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"08:01:2023"}
                </p>
            </div>
            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    {232}
                </p>
                <p>
                    <b>Shipping Charges</b>
                    {60}
                </p>
                <p>
                    <b>Taxes</b>
                    {1}
                </p>
                <p>
                    <b>Total</b>
                    {232+60+1}
                </p>
            </div>
            <article>
              <h1>Orderd Items</h1>
              <div>
                <h4>Cheese Burger</h4>
                <div>
                  <span>{12}</span> X <span>{121}</span>
                </div>
              </div>
              <div>
                <h4>Veg Burger</h4>
                <div>
                  <span>{2}</span> X <span>{121}</span>
                </div>
              </div>
              <div>
                <h4>Makhni Burger</h4>
                <div>
                  <span>{3}</span> X <span>{121}</span>
                </div>
              </div>
              <div>
                <h4 style={{fontWeight : 800}}>Sub Total</h4>
                <div style={{fontWeight : 800}}>
                ₹{2560}
                </div>
              </div>
            </article>
      </main>
    </section>
  );
};

export default OrderDetails;

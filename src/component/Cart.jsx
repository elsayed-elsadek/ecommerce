import { Link } from "react-router-dom";
import Footer from "../pages/Footer";
import { useCart } from "../context/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cart, clearCart } = useCart();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id, value) => {
    if (value >= 1 && value <= 10) {
      setQuantities((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const calculateSubtotal = (id, price) => {
    return price * quantities[id];
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => {
      return total + calculateSubtotal(product.id, product.price);
    }, 0);
  };

  return (
    <>
      <div className="container my-5">
        {/* Breadcrumb */}
        <div className="d-flex flex-wrap gap-2 my-5 py-4">
          <p className="text-black-50 m-0">Home</p>
          <span className="text-black-50">/</span>
          <p className="m-0">Cart</p>
        </div>

        {/* إذا كانت السلة فارغة */}
        {cart.length === 0 ? (
          <div className="text-center my-5">
            <h2 className="text-muted">Your cart is empty.</h2>
            <Link to="/" className="btn btn-outline-dark mt-3">
              Return To Shop
            </Link>
          </div>
        ) : (
          <div className="row flex-column gap-5">
            {/* Header Row */}
            <div className="d-none d-md-flex justify-content-between shadow p-4 align-items-center">
              <p className="mb-0 w-25">Product</p>
              <p className="mb-0 w-25 text-center">Price</p>
              <p className="mb-0 w-25 text-center">Quantity</p>
              <p className="mb-0 w-25 text-center">Subtotal</p>
            </div>

            {/* Product Row */}
            {cart.map((product) => (
              <div
                key={product.id}
                className="d-flex flex-column flex-md-row gap-4 justify-content-between shadow align-items-center p-4"
              >
                <div
                  className="productCart d-flex align-items-center gap-3"
                  style={{ width: "25%" }}
                >
                  <img
                    src={product.image}
                    alt={product.id}
                    className=""
                    style={{ width: "50px" }}
                  />
                  <p className="mb-2 mb-md-0 w-auto">
                    {product.title.slice(0, 20)}
                  </p>
                </div>

                <p className="mb-2 mb-md-0 w-25 text-center">${product.price}</p>
                <div className="w-25">
                  <input
                    type="number"
                    className="quanInput form-control m-auto text-center"
                    style={{ width: "50%" }}
                    min="1"
                    max="10"
                    step="1"
                    value={quantities[product.id]}
                    onChange={(e) =>
                      handleQuantityChange(product.id, parseInt(e.target.value))
                    }
                  />
                </div>
                <p className="mb-0 w-25 text-center">
                  ${calculateSubtotal(product.id, product.price)}
                </p>
              </div>
            ))}

            {/* Buttons Row */}
            <div className="d-flex flex-wrap gap-3 justify-content-between align-items-center">
              <Link to="/" className="btn btn-outline-dark">
                Return To Shop
              </Link>
              <button
                className="btn btn-outline-dark"
                onClick={() => {
                  clearCart();
                }}
              >
                Clear Cart
              </button>
            </div>

            <div className="row my-4 g-5">
              {/* Coupon Section */}
              <div className="col-md-6 col-sm-12 d-flex flex-column flex-md-row gap-3 align-items-start">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="form-control p-2 w-50"
                />
                <button className="btn bg-danger text-light">
                  Apply Coupon
                </button>
              </div>

              {/* Cart Total Section */}
              <div className="col-md-6 col-sm-12 card">
                <div className="card-body">
                  <h5 className="card-title mb-3">Cart Total</h5>
                  <div className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between mt-2">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <span>Total:</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </div>
                <Link
                  to="/checkout"
                  className="btn btn-danger w-50 mb-3 m-auto"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;

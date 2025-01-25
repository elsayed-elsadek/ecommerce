import { faCcMastercard, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../pages/Footer";
import { useCart } from "../context/CartContext";

const Checkout = () => {
  const { cart } = useCart();

  // حساب الـ subtotal
  const subtotal = cart.reduce((total, product) => total + product.price, 0);

  // تكلفة الشحن (0 إذا كان مجاني)
  const shipping = 0;

  // حساب الـ total
  const total = subtotal + shipping;

  return (
    <>
      <div className="container my-5">
        {/* Breadcrumb */}
        <div className="d-flex flex-wrap gap-2 my-5 py-4">
          <p className="text-black-50 m-0">Account</p> <span className="text-black-50">/</span>
          <p className="text-black-50 m-0">My Account</p> <span className="text-black-50">/</span>
          <p className="text-black-50 m-0">Product</p> <span className="text-black-50">/</span>
          <p className="text-black-50 m-0">View Cart</p> <span className="text-black-50">/</span>
          <p className="m-0">CheckOut</p>
        </div>

        <h3>Billing Details</h3>

        <div className="row justify-content-between g-5">
          {/* Billing Details */}
          <div className="col-md-5">
            <form className="billingDetails">
              <div className="my-3">
                <label htmlFor="firstName" className="form-label text-black-50">
                  First Name<span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="firstName" required />
              </div>
              <div className="mb-3">
                <label htmlFor="companyName" className="form-label text-black-50">
                  Company Name
                </label>
                <input type="text" className="form-control" id="companyName" />
              </div>
              <div className="mb-3">
                <label htmlFor="streetAddress" className="form-label text-black-50">
                  Street Address<span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="streetAddress" required />
              </div>
              <div className="mb-3">
                <label htmlFor="apartmentDetails" className="form-label text-black-50">
                  Apartment, floor, etc. (optional)
                </label>
                <input type="text" className="form-control" id="apartmentDetails" />
              </div>
              <div className="mb-3">
                <label htmlFor="city" className="form-label text-black-50">
                  Town/City<span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="city" required />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label text-black-50">
                  Phone Number<span className="text-danger">*</span>
                </label>
                <input type="text" className="form-control" id="phone" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label text-black-50">
                  Email Address<span className="text-danger">*</span>
                </label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="saveInfo" />
                <label className="form-check-label" htmlFor="saveInfo">
                  Save this information for faster check-out next time
                </label>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="col-md-6">
            <div className="card my-4 border-0">
              <div className="card-body">
                {cart.map((product) => (
                  <div key={product.id} className="d-flex justify-content-between mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <img src={product.image} style={{ width: "50px" }} alt="productImg" />
                      <p>{product.title.slice(0, 15)}pm </p>
                    </div>
                    <p>${product.price.toFixed(2)}</p>
                  </div>
                ))}

                <div className="d-flex justify-content-between mt-4">
                  <p>Subtotal:</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Shipping:</p>
                  <p>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</p>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <p>Total:</p>
                  <p>${total.toFixed(2)}</p>
                </div>

                {/* Payment Options */}
                <div className="mt-4">
                  <div className="form-check d-flex justify-content-between align-items-center mb-3">
                    <div>
                      <input className="form-check-input" type="radio" name="paymentMethod" id="bank" />
                      <label className="form-check-label" htmlFor="bank">
                        Bank
                      </label>
                    </div>

                    <div className="d-flex gap-4 fs-3">
                      <FontAwesomeIcon icon={faCcMastercard} />
                      <FontAwesomeIcon icon={faPaypal} />
                      <FontAwesomeIcon icon={faCreditCard} />
                    </div>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="paymentMethod" id="cod" defaultChecked />
                    <label className="form-check-label" htmlFor="cod">
                      Cash on delivery
                    </label>
                  </div>
                </div>

                {/* Coupon */}
                <div className="mt-4">
                  <div className="input-group gap-3">
                    <input type="text" className="form-control" placeholder="Coupon Code" />
                    <button className="btn btn-danger p-2">Apply Coupon</button>
                  </div>
                </div>

                {/* Place Order Button */}
                <div className="mt-4 w-100">
                  <button className="btn btn-danger p-2" style={{ minWidth: "35%" }}>
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Checkout;

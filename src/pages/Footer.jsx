import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Qrcode from '../assets/Qrcode 1.png'
import { faAppStore, faGooglePlay } from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <>
      <footer className="footer bg-black d-flex align-items-center p-5" style={{ minHeight: '50vh' }}>
        <div className="container">
          <div className="row text-light ">

            <div className="col-lg-3 col-md-4 col-sm-6 mb-5 ">
              <h4 className="mb-4">Exclusive</h4>
              <h4>Subscribe</h4>
              <p>Get 10% off your first order</p>
              <div className="inputGroup position-relative my-2">
                <input className=" bg-transparent text-light px-2 py-1 border-1 w-75" type="email" placeholder="Enter your email" />
                <span className="inputArrow position-absolute"> <FontAwesomeIcon icon={faArrowRight} /></span>
              </div>

            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-5 d-table">
              <h4 className="mb-4">Support</h4>
              <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
              <a className="text-decoration-none text-light" href="mailto:elsadek134@gmail.com">exclusive@gmail.com</a>
              <a className="d-flex mt-2 text-decoration-none text-light" href="#">+88015-88888-9999</a>
            </div>

            <div className="col-lg-2 col-md-4 col-sm-6 mb-5">
              <h4 className="mb-4">Account</h4>
              <Link className="text-light text-decoration-none d-block" to="/myaccount">My Account</Link>
              <Link className="text-light text-decoration-none d-block" to="login">Login / Register</Link>
              <Link className="text-light text-decoration-none d-block" to="/cart">Cart</Link>
              <Link className="text-light text-decoration-none d-block" to="/wishlist">Wishlist</Link>
              <Link className="text-light text-decoration-none d-block" to="/allproducts">Shop</Link>
            </div>


            <div className="col-lg-2 col-md-4 col-sm-6 mb-5">
              <h4 className="mb-4">Quick Link</h4>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <Link className="text-light text-decoration-none d-block" to="/contact">Contact</Link>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 mb-5">
              <h4 className="mb-4">Download App</h4>
              <p>Save $3 with App New User Only</p>

              <div className="d-flex gap-3 align-items-center my-2 flex-wrap">
                <img src={Qrcode} alt="QrCode" className="w-" />
                <div className="d-grid gap-2 my-2">
                  <button className="btn btn-dark fs-6" style={{ width: "9rem", height: "2.2rem" }}><
                    FontAwesomeIcon icon={faGooglePlay} /> Google Play</button>

                  <button className="btn btn-dark fs-6" style={{ width: "9rem", height: "2.2rem" }}>
                    <FontAwesomeIcon icon={faAppStore} />  App Store</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </footer>


    </>
  )
}

export default Footer

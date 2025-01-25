import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import portraitImg from '../assets/portrait-two-african-females1.png'
import { faDollar, faDonate, faGift, faHeadphones, faHome, faTasks, faTruck } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'
import teamwork1 from "../assets/client-1.png";
import teamwork2 from "../assets/client-2.png";
import teamwork3 from "../assets/client-3.png";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  return (
    <>
      <div className="container">
        {/* Billing Details */}
        <div className="d-flex gap-3 my-5 py-4">
          <p className=" text-black-50">Home</p> <span className="text-black-50">/</span> <p>ِِAbout</p>
        </div>

        <div className="row">
          <div className="col-md-6 col-sm-12  d-flex flex-column justify-content-center mb-5">
            <h1 className='mb-4'>Our Story</h1>
            <p>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
            <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
          </div>

          <div className="col-md-6 col-sm-12 mb-5">
            <img src={portraitImg} className='w-100 h-100' alt="portraitImg" />
          </div>
        </div>

        {/* activetes */}
        <div className="row my-5 gap-5 justify-content-center">

          <div className="col-md-3 col-sm-6 border border-1 border-black p-4 text-center"
            style={{ width: "12rem", height: "15rem" }}>

            <div className="p-2 rounded-circle d-flex justify-content-center mx-auto my-4" style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
              <FontAwesomeIcon icon={faHome} className="bg-black rounded-circle p-2 m-auto text-light " />
            </div>
            <h2 className='fw-semibold'>10.5k</h2>
            <p>Sallers active our site</p>
          </div>

          <div className="col-md-3 col-sm-6  text-light p-4 text-center bg-danger"
            style={{ width: "12rem", height: "15rem" }}>

            <div className="p-2 rounded-circle d-flex justify-content-center mx-auto my-4" style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
              <FontAwesomeIcon icon={faDollar} className="bg-black rounded-circle p-2 m-auto text-light " />
            </div>
            <h2 className='fw-semibold'>33k</h2>
            <p>Mopnthly Produduct Sale</p>
          </div>


          <div className=" col-md-3 col-sm-6 border border-1 border-black p-4 text-center"
            style={{ width: "12rem", height: "15rem" }}>

            <div className="p-2 rounded-circle d-flex justify-content-center mx-auto my-4" style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
              <FontAwesomeIcon icon={faTasks} className="bg-black rounded-circle p-2 m-auto text-light " />
            </div>
            <h2 className=' fw-semibold'>45.5k</h2>
            <p>Customer active in our site</p>
          </div>


          <div className=" col-md-3 col-sm-6  border border-1 border-black p-4 text-center"
            style={{ width: "12rem", height: "15rem" }}>

            <div className="p-2 rounded-circle d-flex justify-content-center mx-auto my-4" style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
              <FontAwesomeIcon icon={faGift} className="bg-black rounded-circle p-2 m-auto text-light " />
            </div>
            <h2 className='fw-semibold'>25k</h2>
            <p>Anual gross sale in our site</p>
          </div>

        </div>
      </div>

      {/* Team Work */}
      <div className="container my-5">
        <div className="row g-5 my-5 text-center">
          <div className="col-12 col-sm-6 col-md-4">
            <img src={teamwork1} alt="" className="img-fluid" />
            <h2 className="mt-3">Tom Cruise</h2>
            <p>Founder & Chairman</p>
            <div className="d-flex gap-3 socialMedia justify-content-center">
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="text-black" />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} className="text-black" />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="text-black" />
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 ">
            <img src={teamwork2} alt="" className="img-fluid" />
            <h2 className="mt-3">Mike Cruise</h2>
            <p>Managing Director</p>
            <div className="socialMedia d-flex gap-3 justify-content-center">
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="text-black" />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} className="text-black" />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="text-black" />
              </a>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-4 ">
            <img src={teamwork3} alt="" className="img-fluid" />
            <h2 className="mt-3">Will Smith</h2>
            <p>Product Designer</p>
            <div className="socialMedia d-flex gap-3 justify-content-center">
              <a href="https://twitter.com">
                <FontAwesomeIcon icon={faTwitter} className="text-black" />
              </a>
              <a href="https://instagram.com">
                <FontAwesomeIcon icon={faInstagram} className="text-black" />
              </a>
              <a href="https://facebook.com">
                <FontAwesomeIcon icon={faFacebook} className="text-black" />
              </a>
            </div>
          </div>
        </div>


        {/* customer services */}
        <div className="d-md-flex d-sm-block gap-5 my-5 p-4 justify-content-center text-center">
          <div className="d-grid">
            <div className="rounded-circle d-flex justify-content-center mx-auto my-4 " style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
              <FontAwesomeIcon icon={faTruck} className="bg-black rounded-circle p-2 m-auto text-light ">
              </FontAwesomeIcon>
            </div>
            <h4 className=" fw-semibold">FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>


          <div className="d-grid ">
            <div className=" rounded-circle d-flex justify-content-center  mx-auto my-4 " style={{ background: "#C1C0C1", width: "60px", height: "60px" }} >
              <FontAwesomeIcon icon={faHeadphones} className="bg-black rounded-circle p-2 m-auto text-light ">
              </FontAwesomeIcon>
            </div>
            <h4 className=" fw-semibold">24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>

          <div className="d-grid ">
            <div className="rounded-circle d-flex justify-content-center  mx-auto my-4 " style={{ background: "#C1C0C1", width: "60px", height: "60px" }}>
              <FontAwesomeIcon icon={faDonate} className="bg-black rounded-circle p-2 m-auto text-light ">
              </FontAwesomeIcon>
            </div>
            <h4 className=" fw-semibold">MONEY BACK GUARANTEE</h4>
            <p>We reurn money within 30 days</p>
          </div>




        </div>

      </div>

      <Footer />
    </>
  )
}

export default About

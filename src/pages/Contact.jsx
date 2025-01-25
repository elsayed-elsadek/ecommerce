import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./Footer";
import { faMessage, faMobile } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <>
    <div className="container my-5">
      {/* Breadcrumb */}
      <div className="d-flex gap-3 my-5 py-4">
        <p className=" text-black-50">Home</p> <span className="text-black-50">/</span> <p>Contact</p>
      </div>
            
            

      <div className="row">
        {/* Left Section */}
        <div className="col-md-4">
          <div className="shadow-sm p-4 mb-4">
            <div className="mb-4 d-flex gap-3 align-items-center">
             <FontAwesomeIcon icon={faMobile} className="p-2 bg-danger  rounded-circle text-light"/>
             <span>Call To Us</span>
            </div>
            <p className="card-text">
              We are available 24/7, 7 days a week.
            </p>
            <p>Phone: +8801611122222</p>
          <hr />

 <div className="my-4">

            <div className="d-flex gap-3 align-items-center mb-4">
          <FontAwesomeIcon icon={faMessage} className="p-2 bg-danger  rounded-circle text-light"/>
            <span> Write To Us</span>
            </div>

            <p className="card-text">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
          </div>
         
        </div>

        {/* Right Section */}
        <div className="col-md-8">
          <div className=" shadow-sm p-4">
            <form>
              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <input
                   style={{backgroundColor:"#F5F5F5"}}
                    type="text"
                    className="form-control border-0 p-2"
                    placeholder="Your Name *"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input
                     style={{backgroundColor:"#F5F5F5"}}
                    type="email"
                    className="form-control border-0 p-2"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <input
                  style={{backgroundColor:"#F5F5F5"}}
                    type="text"
                    className="form-control border-0 p-2"
                    placeholder="Your Phone *"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea 
                  style={{backgroundColor:"#F5F5F5"}}
                  className="form-control border-0 p-2"
                  rows="5"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-end">
                <button type="submit" className="btn btn-danger p-2 px-4">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

<Footer/>
    </>
  );
}



export default Contact

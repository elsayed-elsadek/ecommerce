import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import voucherImg1 from "../assets/hero_endframe 2.png";
import voucherImg2 from "../assets/iphone1.png";
import voucherImg3 from "../assets/iphone2.png";
import voucherImg4 from "../assets/iphone3.png";
import voucherImg5 from "../assets/iphone3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
  const images = [voucherImg1, voucherImg2, voucherImg3, voucherImg4, voucherImg5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval); // تنظيف الـ interval
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <div className="categoty container mb-5">
        <div className="row gx-5">
          <div className="col-lg-3 col-md-4 col-sm-12 left-side">
            <ul className="list-unstyled mt-5 d-grid gap-2">
              <Link to="/category/women" className="text-decoration-none text-black d-flex justify-content-between align-items-center">
                <li>Women’s Fashion</li>
                <h5>{">"}</h5>
              </Link>
              <Link to="/category/mens-fashion" className="text-decoration-none text-black d-flex justify-content-between align-items-center">
                <li>Men’s Fashion</li>
                <h5>{">"}</h5>
              </Link>
              <Link to="/category/electronics" className="text-decoration-none text-black">
                <li>Electronics</li>
              </Link>
              <Link to="/category/home-lifestyle" className="text-decoration-none text-black">
                <li>Home & Lifestyle</li>
              </Link>
              <Link to="/category/medicine" className="text-decoration-none text-black">
                <li>Medicine</li>
              </Link>
              <Link to="/category/sports-outdoor" className="text-decoration-none text-black">
                <li>Sports & Outdoor</li>
              </Link>
              <Link to="/category/babies-toys" className="text-decoration-none text-black">
                <li>Baby’s & Toys</li>
              </Link>
              <Link to="/category/groceries-pets" className="text-decoration-none text-black">
                <li>Groceries & Pets</li>
              </Link>
              <Link to="/category/health-beauty" className="text-decoration-none text-black">
                <li>Health & Beauty</li>
              </Link>
            </ul>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12 mx-auto my-4 text-light "
          >
            <div className="d-flex flex-column flex-md-row justify-content-between bg-black w-100 h-100 m-auto mt-4 p-5 py-2 align-items-center position-relative">
              <div className="d-grid gap-3 text-center text-md-start">
                <div className="d-flex gap-4 align-items-center justify-content-center justify-content-md-start">
                  <FontAwesomeIcon className="fs-1" icon={faApple} />
                  <p>iPhone 14 Series</p>
                </div>
                <h1>Up to 10% off Voucher</h1>
                <Link to="/allproducts" className="text-light d-flex gap-3 align-items-center justify-content-center justify-content-md-start">
                  Shop Now
                  <FontAwesomeIcon className="fs-4" icon={faArrowRight} />
                </Link>
              </div>
              <div className=" text-center text-md-end mt-4 mt-md-0 w-50 h-auto">
                <img
                  className=""
                  style={{
                    width: "60%"
                    , height: "100%"
                  }}
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                />
              </div>


              <div
                className="dots position-absolute d-flex gap-3"
                style={{ bottom: "5%", right: "40%" }}
              >
                {images.map((_, index) => (
                  <h1
                    key={index}
                    onClick={() => handleDotClick(index)}
                    style={{
                      color: currentIndex === index ? "#FFD700" : "#FFFFFF",
                      fontSize: "60px",
                      cursor: "pointer",
                      transition: "color 0.3s ease",
                    }}
                  >
                    .
                  </h1>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;

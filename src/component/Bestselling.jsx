import { useEffect, useState } from "react"
import { fetchAllProducts } from "../services/ProductServices";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BoomBox from "../assets/Frame 600.png";
import { useTime } from "../context/TimeContext";
import { useWishlist } from "../context/WishlistContext";


// Rating Satars
// eslint-disable-next-line react/prop-types
export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {/*full star*/}
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <span key={`full-${i}`} style={{ color: "gold", fontSize: "18px" }}>★</span>
        ))}

      {/*half star*/}
      {hasHalfStar && <span style={{ color: "gold", fontSize: "18px" }}>☆</span>}

      {/* emtystar*/}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <span key={`empty-${i}`} style={{ color: "lightgray", fontSize: "18px" }}>★</span>
        ))}
    </div>
  );
};



const Bestselling = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const timeLeft = useTime();

  //  handel wish list
  const { addToWishlist } = useWishlist();
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
        setLoading(false);
        console.log(data);

      } catch (error) {
        console.log(error);
      };
    };

    getProducts();

  }, []);

  if (loading) {
    return <><h1 className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>loading products.....</h1><hr /></>
  }
  else
    return (
      <>
        <div className="todays">
          <div className="container">
            <h3 className="text-danger d-flex align-items-center gap-3">
              <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
              This Month</h3>

            <div className="flashTimer d-flex  align-items-center justify-content-between ">

              <div className="d-flex  flex-wrap gap-1 align-items-center justify-content-sm-between justify-content-sm-center w-100 pb-3">
                <h2>Best Selling Products</h2>
                <Link to="/allproducts" className="btn btn-danger px-4 py-3">View All Products</Link>
              </div>


            </div>


            {/* display products from json */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-between gap-5 my-5 ">
              {products.slice(10, 14).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="text-black text-decoration-none">
                  <div className="product">

                    <div className="d-flex justify-content-end p-2 ">
                      <FontAwesomeIcon className=" bg-body rounded-5 p-2 " icon={faHeart}
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.classList.add("text-danger");
                          handleAddToWishlist(product);
                        }} />
                    </div>


                    <div className="d-flex p-2  ">
                      <img className="m-auto" src={product.image} alt="productImg" style={{ maxWidth: '80px' }} />

                      <span className="text-black ">
                        <FontAwesomeIcon className="showProduct bg-body rounded-5 p-2 " icon={faEye} />
                      </span>

                    </div>

                  </div>
                  <div className="details">
                    <p>{product.title.slice(0, 20)}</p>

                    <p className="text-danger gap-3 d-flex">${Math.floor(product.price / 1.1)}
                      <span className="text-black-50 text-decoration-line-through">{Math.floor(product.price)}</span>
                    </p>

                    <div className="d-flex gap-3">
                      <StarRating rating={product.rating.rate} />
                      <span className=" d-flex">({product.rating.count})</span>
                    </div>
                  </div>

                </Link>
              ))}
            </div>

            <div className="row bg-black mb-5 " style={{ marginTop: "100px" }}>
              <div className="col-md-6 col-sm-12 d-grid text-light p-5">
                <p style={{ color: "#00FF66" }}>Categories</p>
                <h1>Enhance Your Music Experience</h1>
                {/* display counter time */}
                <div className="d-flex my-3 flex-wrap">
                  {Object.keys(timeLeft).map((unit, index) => (
                    <div className="bg-light m-2 text-black rounded-circle"
                      key={index}
                      style={{
                        textAlign: "center",
                        padding: "10px",
                        width: '70px',
                        height: "70px"
                      }}
                    >
                      <p className=" fw-bold m-0 ">
                        {timeLeft[unit].toString().padStart(2, "0")}
                      </p>
                      <p style={{ fontSize: '12px' }}>
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                      </p>


                    </div>
                  ))}
                </div>
                <Link to="/allproducts" className="btn w-50 text-light d-flex align-items-center justify-content-center" style={{ backgroundColor: '#00FF66' }}>Buy Now</Link>
              </div>

              <div className="col-md-6 col-sm-12 ">
                <img className="w-100" src={BoomBox} alt="bomBoxImg" />
              </div>

            </div>


          </div>
        </div>
      </>
    )
}


export default Bestselling

import { useEffect, useRef, useState } from "react"
import { fetchAllProducts } from "../services/ProductServices";
import { faArrowLeft, faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
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



const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const navigate = useNavigate();

  //  handel wish list
  const { addToWishlist } = useWishlist();
  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };

  const handleScroll = (direction) => {
    const scrollAmount = 250;
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handelNavigation = () => {
    navigate("/allproducts")
  }
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
    return <><h5 className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}>loading products.....</h5><hr /></>
  }
  else
    return (
      <>
        <div className="todays my-5">
          <div className="container">
            <h3 className="text-danger d-flex align-items-center gap-3">
              <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
              Our Products </h3>

            <div className="flashTimer d-flex  align-items-center justify-content-between my-3">

              <h2> Explore Our Products </h2>

              <div className="arrows d-flex gap-4">
                <FontAwesomeIcon className="arrow fs-4 p-2 rounded-circle" icon={faArrowLeft}
                  onClick={() => handleScroll("left")}
                  style={{ cursor: 'pointer' }}
                />
                <FontAwesomeIcon className="arrow fs-4 p-2 rounded-circle" icon={faArrowRight}
                  onClick={() => handleScroll("right")}
                  style={{ cursor: 'pointer' }}
                />
              </div>

            </div>

            {/* display producs */}
            <div className=" " ref={scrollRef}
              style={{
                display: "grid",
                gridTemplateRows: "repeat(2, auto)",
                gridAutoFlow: "column",
                gap: "20px",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                padding: "10px",
                overflowX: "scroll",
                scrollbarWidth: 'none',
              }}>


              {products.slice(6, 20).map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="text-black text-decoration-none my-2"
                  style={{ width: '230px' }}
                >
                  <div className="product">
                    <div className="d-flex justify-content-end p-2 ">
                      <FontAwesomeIcon className=" bg-body rounded-5 p-2" icon={faHeart}
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.classList.add("text-danger");
                          handleAddToWishlist(product);
                        }} />
                    </div>

                    <div className="d-flex p-2  ">
                      <img className="m-auto" src={product.image} alt="productImg" style={{ maxWidth: '80px' }} />

                      <span className="text-black">
                        <FontAwesomeIcon className="showProduct bg-body rounded-5 p-2 " icon={faEye} />
                      </span>    </div>
                  </div>

                  <div className="details">
                    <p>{product.title.slice(0, 20)}</p>

                    <div className="d-flex justify-content-start gap-3">
                      <p className="text-danger gap-3 d-flex">${Math.floor(product.price / 1.1)}</p>
                      <StarRating rating={product.rating.rate} />
                      <span className="text-black-50">({Math.floor(product.rating.count)})</span>
                    </div>

                  </div>
                </Link>

              ))}
            </div>

            <button className="m-auto btn btn-danger d-flex my-5 px-4 py-3"
              onClick={handelNavigation}
            >View All Products</button>
          </div>

        </div>
      </>
    )
}



export default OurProducts

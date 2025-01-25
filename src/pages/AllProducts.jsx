import { useEffect, useRef, useState } from "react"
import { fetchAllProducts } from "../services/ProductServices";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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



const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

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
    return <div className="loading">Loading&#8230;</div>
  }
  else
    return (
      <>
        <div className="todays my-3">
          <div className="container">
            <h3 className="text-danger d-flex align-items-center gap-3">
              <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
              All Products</h3>

            <div className="row" ref={scrollRef} style={{ overflowX: "scroll", scrollbarWidth: 'none' }}>

              {products.map((product) => (
                <Link to={`/product/${product.id}`} key={product.id} className="text-black text-decoration-none  col-lg-3 col-md-4 col-sm-8  m-auto mb-4">
                  <div className="product">
                    <div className="d-flex justify-content-between p-2 ">
                      <p className="bg-danger text-light rounded-3" style={{ width: '60px', textAlign: "center" }}>-{Math.floor(product.price / 10)}%</p>
                      <FontAwesomeIcon className=" bg-body rounded-5 p-2" icon={faHeart}
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.classList.add("text-danger");
                          handleAddToWishlist(product);
                        }} />
                    </div>

                    <div className="d-flex p-2  ">
                      <img className="m-auto" src={product.image} alt="productImg" style={{ maxWidth: '80px' }} />
                      <FontAwesomeIcon className=" bg-body rounded-5 p-2 " icon={faEye} />
                    </div>

                  </div>
                  <div className="details">
                    <p>{product.title.slice(0, 20)}</p>
                    <p className="text-danger gap-3 d-flex">${Math.floor(product.price / 1.1)} <span className="text-black-50 text-decoration-line-through">{Math.floor(product.price)}</span></p>
                    <div className="d-flex gap-3">
                      <StarRating rating={product.rating.rate} />
                      <span className=" d-flex">({product.rating.count})</span>
                    </div>
                  </div>
                </Link>

              ))}
            </div>

          </div>

        </div>
      </>
    )
}



export default AllProducts

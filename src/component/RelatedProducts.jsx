/* eslint-disable react/prop-types */
// RelatedProducts.js
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "./OurProducts";

// eslint-disable-next-line react/prop-types
const RelatedProducts = ({ products, category }) => {
  let counterItem = 0;

  return (
    <div className="container my-5">
      <h3 className="text-danger d-flex align-items-center gap-3">
        <span className="bg-danger d-block rounded-1" style={{ width: "20px", height: "50px", backgroundColor: "red" }}></span>
        Related Items
      </h3>

      <div className="todays d-flex justify-content-between gap-5 my-5">
        {/* Show Related Products */}
        {products.map((item) => {
          if (item.category === category && counterItem < 4) {
            counterItem++;

            return (
              <Link to={`/product/${item.id}`} key={item.id} className="text-black text-decoration-none">
                <div className="product">
                  <div className="d-flex justify-content-end p-2">
                    <FontAwesomeIcon className="bg-body rounded-5 p-2" icon={faHeart} />
                  </div>

                  <div className="d-flex p-2">
                    <img className="m-auto" src={item.image || ""} alt="Itemimg" style={{ maxWidth: "80px" }} />
                    <FontAwesomeIcon className="bg-body rounded-5 p-2" icon={faEye} />
                  </div>
                </div>

                <div className="details">
                  <p>{item.title.slice(0, 20)}</p>
                  <p className="text-danger gap-3 d-flex">
                    ${Math.floor(item.price / 1.1)}{" "}
                    <span className="text-black-50 text-decoration-line-through">{Math.floor(item.price)}</span>
                  </p>
                  <div className="d-flex gap-3">
                    <StarRating rating={item.rating.rate} />
                    <span className="d-flex">({item.rating.count})</span>
                  </div>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;

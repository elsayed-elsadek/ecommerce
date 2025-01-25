/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWishlist } from "../context/WishlistContext";
import { faEye, faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { StarRating } from "../component/OurProducts";
import { Link } from "react-router-dom";
import { fetchAllProducts } from "../services/ProductServices";
import { useEffect, useState, useMemo } from "react";
import { useCart } from "../context/CartContext";

// مكون فرعي لبطاقة المنتج
// eslint-disable-next-line react/prop-types
const ProductCard = ({ product, removeFromWishlist }) => {
  const { addToCart } = useCart();
  return (
    // eslint-disable-next-line react/prop-types
    <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
      <div className="card border-0" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="d-flex justify-content-end p-2">
          <button
            className="btn btn-sm btn-outline-dark"
            onClick={() => removeFromWishlist(product.id)}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
        <img
          src={product.image}
          className="card-img-top mx-auto"
          style={{ width: "80%", height: "150px", objectFit: "contain" }}
          alt={product.title}
        />
        <div className="text-center">
          <button onClick={(e) => {
            addToCart(product)
            e.target.classList.add("bg-danger");
          }} className="btn btn-dark w-100 p-2 d-flex gap-3 align-items-center justify-content-center border-0">
            <FontAwesomeIcon icon={faShoppingCart} />
            Add To Cart
          </button>
        </div>
      </div>

      <h5 className="text-truncate my-2">{product.title}</h5>
      <p className="card-text text-muted ">
        <span className="text-danger">${product.discountedPrice || product.price}</span>
        {product.discountedPrice && (
          <small className="text-decoration-line-through ms-2">${product.price}</small>
        )}
      </p>
    </div>
  );
};

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart()

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data);
        setLoading(false);
        // eslint-disable-next-line no-unused-vars
      } catch (error) {
        setError("Failed to load products. Please try again later.");
        setLoading(false);
      }
    };
    getProducts();
  }, []);


  const relatedProducts = useMemo(() => {
    return products.filter((item) =>
      wishlist.some((wishlistItem) => wishlistItem.category === item.category)
    );
  }, [products, wishlist]);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center my-5">
        <p>My Wishlist ({wishlist.length})</p>
        <button className="btn btn-outline-dark">Move All To Bag</button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-danger">{error}</p>
      ) : wishlist.length === 0 ? (
        <p>No items in wishlist</p>
      ) : (
        <div className="row g-5 justify-content-center">
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              removeFromWishlist={removeFromWishlist}
            />
          ))}
        </div>
      )}

      {/* Related Items */}
      <div className="container my-5">
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="text-black d-flex align-items-center gap-3">
            <span
              className="bg-danger d-block rounded-1"
              style={{ width: "20px", height: "50px", backgroundColor: "red" }}
            ></span>
            Just For You
          </h4>
          <Link to="/allproducts" className="btn btn-outline-dark p-3 px-5">
            See All
          </Link>
        </div>
        <div className="todays row justify-content-between g-5 my-5">
          {relatedProducts.length > 0 ? (
            relatedProducts.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center"
              >
                <div className="card border-0" style={{ width: "100%", backgroundColor: "#F5F5F5" }}>
                  <div className="card-header bg-transparent border-0 d-flex justify-content-end p-2">
                    <FontAwesomeIcon className="bg-body rounded-5 p-2" icon={faEye} />
                  </div>
                  <div className="card-body d-flex justify-content-center p-2">
                    <img
                      className="m-auto"
                      src={item.image || ""}
                      alt="Itemimg"
                      style={{ maxWidth: "80px" }}
                    />
                  </div>
                  <div className="card-footer bg-transparent border-0">
                    <button onClick={(e) => {
                      addToCart(item)
                      e.target.classList.add("bg-danger");
                    }} className="btn btn-dark w-100 p-2 d-flex gap-3 align-items-center justify-content-center border-0">
                      <FontAwesomeIcon icon={faShoppingCart} />
                      Add To Cart
                    </button>
                    <div className="details my-3">
                      <p className="mb-1 text-truncate">{item.title.slice(0, 20)}</p>
                      <p className="text-danger gap-3 d-flex mb-2">
                        ${Math.floor(item.price / 1.1)}{" "}
                        <span className="text-black-50 text-decoration-line-through ms-2">
                          {Math.floor(item.price)}
                        </span>
                      </p>
                      <div className="d-flex gap-3">
                        <StarRating rating={item.rating.rate} />
                        <span>({item.rating.count})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No related products found</p>
          )}
        </div>
      </div>

    </div>
  );
};

export default WishlistPage;

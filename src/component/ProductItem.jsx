import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAllProducts, fetchProductById } from "../services/ProductServices";
import { StarRating } from "./OurProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faHeart, faTruck } from "@fortawesome/free-solid-svg-icons";
import { faRecycle } from "@fortawesome/free-solid-svg-icons/faRecycle";
import Footer from "../pages/Footer"
import { useWishlist } from "../context/WishlistContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
  // for handel quantity of item
  const [quantity, setQuantity] = useState(2);
  const [selectedSize, setSelectedSize] = useState("");
  let counterItem = 0;

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  // handel size
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  // fetch product item by id
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [id]);

  // loader of products
  if (loading || !product) {
    return <div className="loading">Loading&#8230;</div>;
  }

  return (
    <>

      <div className="productItem p-2 m-md-5 m-0">
        <div className="container">

          {/* Billing Details */}
          <div className="d-flex flex-wrap gap-2 text-black-50 my-3">
            <span>Home</span>/<span>{product.category.slice(0, 1).toUpperCase() + product.category.slice(1)}</span> /
            <span className="text-black">{product.title.slice(0, 20)}</span>
          </div>

          <div className="row my-md-5 my-0 py-4 g-5">
            <div className="col-lg-2 col-md-2 d-flex d-md-grid gap-2 justify-content-center"
            >
              <div className="sliderproductImg"
                style={{ height: "120px", width: "120px", backgroundColor: "#F5F5F5" }}>
                <img src="img1" alt="photo1" />
              </div>

              <div className="sliderproductImg"
                style={{ height: "120px", width: "120px", backgroundColor: "#F5F5F5" }}>
                <img src="img2" alt="photo2" />
              </div>

              <div className="sliderproductImg"
                style={{ height: "120px", width: "120px", backgroundColor: "#F5F5F5" }}>
                <img src="img3" alt="photo3" />
              </div>

              <div className="sliderproductImg"
                style={{ height: "120px", width: "120px", backgroundColor: "#F5F5F5" }}>
                <img src="img4" alt="photo4" />
              </div>

            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 text-center align-content-center p-2 mx-auto"
              style={{ backgroundColor: "#F5F5F5", maxHeight: '600px' }}>
              <img className="w-50 " src={product.image} alt="productImg" />
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12  mx-auto">
              <h4>{product.title}</h4>
              <StarRating rating={product.rating.rate} />
              <h4 className="text-danger">{product.price} <span >$</span></h4>
              <p>{product.description.slice(1, 75)}</p>
              <hr />

              {/*chek if product has a color */}
              <div className="d-flex gap-4 align-items-baseline">
                <h4>Colours:</h4>
                <div className="">
                  {product.colors && product.colors.length > 0 ? (
                    product.colors.map((color, index) => (
                      <button
                        key={index}
                        className="mx-1"
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: "0",
                          backgroundColor: color,
                        }}
                        title={color}
                      ></button>
                    ))
                  ) : (
                    <p className="text-muted">No colours available</p>
                  )}
                </div>
              </div>


              <div className="d-flex flex-wrap gap-3 align-items-center my-3">
                <h4>Size:</h4>

                <div className="d-flex flex-wrap align-items-center gap-3">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      className={`btn ${selectedSize === size ? "btn-dark" : "btn-outline-dark"}`}
                      style={{ width: "40px" }}
                      onClick={() => handleSizeClick(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>

              </div>

              <div className="d-flex flex-wrap gap-3 mt-5  justify-content-center justify-content-md-between my-4">

                <div className="d-flex">
                  <button className="btn btn-outline-dark" onClick={handleDecrease}>-</button>
                  <div className="text-center btn" style={{ width: "50px" }}>{quantity}</div>
                  <button className="btn btn-danger border-0" onClick={handleIncrease}>+</button>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button className="btn btn-danger">Buy Now</button>
                  <FontAwesomeIcon icon={faHeart} className="p-2 fs-5"
                    onClick={(e) => {
                      e.preventDefault();
                      e.target.classList.add("text-danger");
                      handleAddToWishlist(product);
                    }} />
                </div>

              </div>

              <div className="border border-1 border-black-50 p-3">
                <div className="d-flex align-items-center gap-3 border-bottom p-2 ">
                  <FontAwesomeIcon className="fs-3" icon={faTruck} />
                  <div >
                    <p className="m-0">Free Delivery</p>
                    <a className="text-decoration-none text-black" to="#">Enter your postal code for Delivery Availability</a>
                  </div>

                </div>

                <div className="d-flex align-items-center gap-4 p-2">
                  <FontAwesomeIcon className="fs-3" icon={faRecycle} />
                  <div >
                    <p className="m-0">Free Delivery</p>
                    <a className="text-decoration-none text-black" to="#">Free 30 Days Delivery Returns. Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      {/* Related Item  */}
      <div className="container my-5">
        <h3 className="text-danger d-flex align-items-center gap-3">
          <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
          Related Item</h3>


        <div className="todays d-flex flex-wrap  justify-content-center justify-content-lg-between gap-5 my-5 ">

          {/* cheek Related Item  */}

          {products.map((item) => {


            if (item.category === product.category && counterItem < 4) {
              counterItem++;

              return (
                <Link to={`/product/${item.id}`} key={item.id} className="text-black text-decoration-none"
                >
                  <div className="product">
                    <div className="d-flex justify-content-end p-2">
                      <FontAwesomeIcon className="bg-body rounded-5 p-2" icon={faHeart}
                        onClick={(e) => {
                          e.preventDefault();
                          e.target.classList.add("text-danger");
                          handleAddToWishlist(item);

                        }}
                      />
                    </div>

                    <div className="d-flex p-2">
                      <img className="m-auto" src={item.image || 'productImg'} alt="Itemimg" style={{ maxWidth: '80px' }} />

                      <span className="text-black ">
                        <FontAwesomeIcon className="showProduct bg-body rounded-5 p-2 " icon={faEye} />
                      </span>
                    </div>
                  </div>

                  <div className="details">
                    <p>{item.title.slice(0, 20)}</p>
                    <p className="text-danger gap-3 d-flex">
                      ${Math.floor(item.price / 1.1)}{' '}
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
      <Footer />
    </>
  );
};

export default ProductDetails;

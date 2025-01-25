/* eslint-disable react/prop-types */
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSearch, faShoppingCart, faBars, faUser, faOutdent, faRightFromBracket, faStar, faCancel } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { fetchAllProducts } from "../services/ProductServices";

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(localStorage.getItem("isSignedUp") === "true");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "English");
  const searchInput = useRef();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("isSignedUp", isSignedUp);
  }, [isSignedUp]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleLogout = () => {
    setIsSignedUp(false);
    alert(language === "English" ? "You have been logged out" : "تم تسجيل خروجك");
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchAllProducts();
        setProducts(data.map(product => ({
          ...product,
          normalizedTitle: product.title.toLowerCase(),
        })));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, []);

  const handleSearch = () => {
    const searchValue = searchInput.current?.value.trim().toLowerCase();
    if (!searchValue) {
      return alert(language === "English" ? "Search input is empty" : "حقل البحث فارغ");
    }

    const product = products.find(product =>
      product.normalizedTitle.includes(searchValue)
    );

    if (product) {
      navigate(`/product/${product.id}`);
    } else {
      alert(language === "English" ? "No product found" : "لم يتم العثور على المنتج");
    }
  };

  const navLinks = [
    { to: "/", label: language === "English" ? "Home" : "الرئيسية" },
    { to: "/contact", label: language === "English" ? "Contact" : "تواصل" },
    { to: "/about", label: language === "English" ? "About" : "عن الموقع" },
    { to: "/signup", label: language === "English" ? "Sign Up" : "إنشاء حساب" },
  ];

  return (
    <>
      <div className="bg-dark w-100 p-3">
        <div className="container d-flex justify-content-center align-items-center">
          <p className="text-light m-auto">
            {language === "English"
              ? "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!"
              : "عرض الصيف على جميع ملابس السباحة وتوصيل مجاني - خصم 50%! "}
            <span>
              <NavLink to="/allproducts" className="text-light">
                {language === "English" ? "Shop Now" : "تسوق الآن"}
              </NavLink>
            </span>
          </p>

          <select
            id="language"
            name="language"
            className="bg-transparent border-0 text-light"
            value={language}
            onChange={handleLanguageChange}
          >
            <option className="text-black" value="English">English</option>
            <option className="text-black" value="Arabic">Arabic</option>
          </select>
        </div>
      </div>

      <nav className="navbar mt-2">
        <div className="container d-flex justify-content-between">
          <Link to="/" className="fw-semibold fs-2 text-decoration-none text-black">
            {language === "English" ? "Exclusive" : "حصري"}
          </Link>

          <ul className="text-decoration-none align-items-center d-none d-sm-flex m-0">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `text-decoration-none m-3 text-black ${isActive ? "active-link" : ""}`
                }
              >
                <li>{link.label}</li>
              </NavLink>
            ))}
          </ul>

          <div className="usertools d-flex gap-4 align-items-center">
            <div className="inputGroup position-relative">
              <input
                className="px-5 py-2 border-0 w-100"
                type="text"
                placeholder={language === "English" ? "What are you looking for?" : "ما الذي تبحث عنه؟"}
                ref={searchInput}
              />
              <span className="searchIcon">
                <FontAwesomeIcon icon={faSearch} onClick={handleSearch} />
              </span>
            </div>

            <Link className="wishListPage text-black" to="/wishlist"><FontAwesomeIcon icon={faHeart} /></Link>
            <Link to="/cart" className="text-black"><FontAwesomeIcon icon={faShoppingCart} /></Link>

            {isSignedUp && (
              <div className="userGroup position-relative">
                <FontAwesomeIcon icon={faUser} className="p-2" />
                <div className="userTools hidden position-absolute rounded-2 p-4 text-light">
                  <div className="d-flex flex-column gap-3">
                    <Link to="/myaccount" className="d-flex gap-4 align-items-center text-light text-decoration-none">
                      <FontAwesomeIcon icon={faUser} /> {language === "English" ? "Manage My Account" : "إدارة حسابي"}
                    </Link>
                    <Link to="/cart" className="d-flex gap-4 align-items-center text-light text-decoration-none">
                      <FontAwesomeIcon icon={faOutdent} /> {language === "English" ? "My Orders" : "طلباتي"}
                    </Link>
                    <Link to="/cart" className="d-flex gap-4 align-items-center text-light text-decoration-none">
                      <FontAwesomeIcon icon={faCancel} /> {language === "English" ? "My Cancellations" : "إلغاءاتي"}
                    </Link>
                    <Link to="/wishlist" className="d-flex gap-4 align-items-center text-light text-decoration-none">
                      <FontAwesomeIcon icon={faStar} /> {language === "English" ? "My Reviews" : "تقييماتي"}
                    </Link>
                    <button
                      className="d-flex gap-4 align-items-center text-light text-decoration-none border-0 bg-transparent"
                      onClick={handleLogout}
                    >
                      <FontAwesomeIcon icon={faRightFromBracket} /> {language === "English" ? "Log Out" : "تسجيل الخروج"}
                    </button>
                  </div>
                </div>
              </div>
            )}
            <FontAwesomeIcon onClick={() => setIsMenuVisible(true)} icon={faBars} className="d-sm-none" />
          </div>
        </div>
      </nav>

      <div
        className={`position-absolute top-0 right-side bottom-0 bg-body ${isMenuVisible ? "w-100 h-50" : "d-none"}`}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <div className="d-flex flex-column p-4">
          <div className="flex align-items-center" onClick={() => setIsMenuVisible(false)}>
            <h4 style={{ cursor: "pointer" }}>{`< ${language === "English" ? "Back" : "رجوع"}`}</h4>
            <hr />
          </div>
          {navLinks.map((link, index) => (
            <div key={index}>
              <NavLink
                to={link.to}
                className="text-black text-decoration-none mx-3 border-0"
                onClick={() => setIsMenuVisible(false)}
              >
                {link.label}
              </NavLink>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

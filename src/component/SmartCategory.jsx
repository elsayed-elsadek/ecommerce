import { faPhone, faComputer, faClock, faCamera, faHeadphones, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Array of category objects
const categories = [
  { icon: faPhone, label: "Phones" },
  { icon: faComputer, label: "Computers" },
  { icon: faClock, label: "Smart Watch" },
  { icon: faCamera, label: "Cameras", highlight: true },
  { icon: faHeadphones, label: "Headphones" },
  { icon: faGamepad, label: "Gaming" },
];

const SmartCategory = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(null); // Track active category

  // Handle click: go to category page or show not found, and set active
  const handleCategoryClick = (label) => {
    setActive(label);
    // Map label to category route (customize as needed)
    const routes = {
      Phones: "/category/electronics",
      Computers: "/category/electronics",
      "Smart Watch": "/category/electronics",
      Cameras: "/category/electronics",
      Headphones: "/category/electronics",
      Gaming: "/category/electronics",
    };
    if (routes[label]) {
      navigate(routes[label]);
    } else {
      navigate("/notfound");
    }
  };

  return (
    <div className="categories my-5 pb-5 border-bottom">
      <div className="container">
        <h3 className="text-danger d-flex align-items-center gap-3">
          <span className="bg-danger d-block rounded-1" style={{ width: '20px', height: '50px', backgroundColor: 'red' }}></span>
          Categories
        </h3>
        <h2 className="fw-semibold my-3 mb-5">Browse By Category</h2>
        <div className="row gap-2 justify-content-center">
          {/* Render each category card */}
          {categories.map((cat) => (
            <div
              key={cat.label}
              className={`col-md-2 col-sm-4 border border-2 rounded-2 d-flex justify-content-center align-items-center${(cat.highlight || active === cat.label) ? " bg-danger" : ""}`}
              style={{ width: '180px', height: '150px', cursor: 'pointer' }}
              onClick={() => handleCategoryClick(cat.label)}
            >
              <div className={(cat.highlight || active === cat.label) ? "text-light" : ""}>
                <FontAwesomeIcon className="w-100 fs-2 my-3" icon={cat.icon} />
                <p>{cat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SmartCategory;

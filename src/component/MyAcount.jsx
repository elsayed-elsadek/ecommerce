import { useAuth } from "../context/UserContext";
import Footer from "../pages/Footer";
import { useState } from "react";

const MyAccount = () => {
  const { user, login } = useAuth();

  // Local state to hold form data for the user
  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    address: user?.address || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Handle input changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure new password and confirm password match
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert("New Password and Confirm Password do not match!");
      return;
    }

    // Update user details
    const updatedUser = {
      userName: `${formData.firstName} ${formData.lastName}`,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      address: formData.address,
    };

    login(updatedUser); // Update the user in the context
    alert("Profile updated successfully!");
  };

  return (
    <>
      <div className="container my-5">
        {/* Page Heading */}
        <div className="d-flex flex-wrap justify-content-between gap-3 align-items-center py-4 my-5">
          <div className="d-flex gap-3">
            <p className="text-black-50">Home</p>
            <span className="text-black-50">/</span>
            <p>About</p>
          </div>
          <p className="m-auto m-sm-0">
            Welcome!{" "}
            <span className="text-danger">
              {user?.userName.charAt(0).toUpperCase() + user?.userName.slice(1, 10)}
            </span>
          </p>
        </div>

        <div className="row">
          {/* Sidebar */}
          <div className="col-md-3">
            <div className="list-group border-5">
              <h6 className="mb-3">Manage My Account</h6>
              <a href="#" className="list-group-item list-group-item-action border-0 text-danger">
                My Profile
              </a>
              <a href="#" className="list-group-item list-group-item-action text-black-50 border-0">
                Address Book
              </a>
              <a href="#" className="list-group-item list-group-item-action text-black-50 border-0">
                My Payment Options
              </a>

              <h6 className="mt-4 mb-3">My Orders</h6>
              <a href="#" className="list-group-item list-group-item-action text-black-50 border-0">
                My Returns
              </a>
              <a href="#" className="list-group-item list-group-item-action text-black-50 border-0">
                My Cancellations
              </a>

              <h6 className="mt-4 mb-3">My Wishlist</h6>
            </div>
          </div>

          {/* Profile Form */}
          <div className="col-md-9">
            <div className="profileForm card border-0 shadow-sm">
              <div className="card-body">
                <h4 className="mb-4 text-danger">Edit Your Profile</h4>
                <form onSubmit={handleSubmit}>
                  {/* First and Last Name */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="form-control"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Email and Address */}
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="form-control"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Password Changes */}
                  <h5 className="mt-4 mb-3">Password Changes</h5>
                  <div className="mb-3">
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      className="form-control"
                      placeholder="Current Password"
                      value={formData.currentPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      className="form-control"
                      placeholder="New Password"
                      value={formData.newPassword}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="form-control"
                      placeholder="Confirm New Password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="d-flex justify-content-end">
                    <button type="button" className="btn btn-light me-3">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-danger">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyAccount;

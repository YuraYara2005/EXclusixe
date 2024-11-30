import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./ProfileForm.css"; // Optional: Add your custom CSS

const Profile = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    firstName: localStorage.getItem("name") || "",
    lastName: localStorage.getItem("lastName") || "",
    email: localStorage.getItem("email") || "",
    address: localStorage.getItem("address") || "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profileData.newPassword === profileData.confirmNewPassword) {
      localStorage.setItem("name", profileData.firstName);
      localStorage.setItem("lastName", profileData.lastName);
      localStorage.setItem("email", profileData.email);
      localStorage.setItem("address", profileData.address);
      alert("Profile updated successfully!");
    } else {
      alert("Passwords do not match!");
    }
  };

  const handleDeleteAccount = () => {
    setShowConfirm(true); // Show confirmation dialog
  };

  // Handle confirming the deletion
  const handleConfirmDelete = () => {
    localStorage.clear();
    navigate("/"); // Redirect to home page after account deletion
  };

  // Handle canceling the deletion
  const handleCancelDelete = () => {
    setShowConfirm(false); // Hide confirmation dialog
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <nav className="nav flex-column p-3 rounded">
            <h4>Manage Profile</h4>
            <a href="#profile" className="nav-link">
              My Profile
            </a>
            <a href="#address-book" className="nav-link">
              Address Book
            </a>
            <a href="#payment-options" className="nav-link">
              My Payment Options
            </a>
            <h5 className="mt-3">My Orders</h5>
            <a href="#returns" className="nav-link">
              My Returns
            </a>
            <a href="#cancellations" className="nav-link">
              My Cancellations
            </a>
            <NavLink to="/Wishlist" activeClassName="activeLink" className="nav-link">
              Wishlist
            </NavLink>
          </nav>
        </div>

        {/* Profile Form */}
        <div className="col-md-9">
          <div className="p-4 shadow-sm rounded">
            <h2  className="Profile-Edit">Edit My Profile</h2>
            <form onSubmit={handleSubmit} className="d-flex row">
              <div className="mb-3 col-md-3 col-sm">
                <label htmlFor="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control inputs"
                  value={profileData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-md-3 col-sm">
                <label htmlFor="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control inputs"
                  value={profileData.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-md-3 col-sm">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control inputs"
                  value={profileData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 col-md-3 col-sm">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control inputs"
                  value={profileData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="currentPassword" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="form-control inputs"
                  value={profileData.currentPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="newPassword" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="form-control inputs"
                  value={profileData.newPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="confirmNewPassword " className="form-label">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  className="form-control inputs"
                  value={profileData.confirmNewPassword}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="col-md-2 btn btn-primary me-3">
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleDeleteAccount}
                className=" col-md-2 btn btn-danger"
              >
                Delete Account
              </button>
            </form>
          </div>
        </div>
        {/* Confirmation Dialog */}
        {showConfirm && (
          <div className="confirmation-dialog">
            <div className="confirmation-content">
              <h5>Are you sure you want to delete your account?</h5>
              <div className="confirmation-buttons">
                <button
                  className="btn btn-danger me-3"
                  onClick={handleConfirmDelete}
                >
                  Confirm
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={handleCancelDelete}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

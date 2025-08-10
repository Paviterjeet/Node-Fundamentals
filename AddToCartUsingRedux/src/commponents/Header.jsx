import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  const cartCount = useSelector((state) => state.cart.items.length);
  // Wishlist slice would be similar: state.wishlist.items.length
  const wishlistCount = 0; // Placeholder until wishlist slice is added
//const cartCount =0;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">MyShop</Link>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" to="/">Home</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">All Items</Link>
            </li>
          </ul>

          {/* Icons */}
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-3">
              <a className="nav-link position-relative" to="/wishlist">
                <FaHeart size={20} />
                {wishlistCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {wishlistCount}
                  </span>
                )}
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                <FaShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

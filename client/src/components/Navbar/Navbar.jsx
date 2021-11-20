import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filtreProducts } from "../../actions/productAction";
import { logoutUser } from "../../actions/userAction";
import "./Navbar.css";

function Navbar() {
    const cartreducer = useSelector((state) => state.cartReducer);
    const { cartItems } = cartreducer;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(currentUser);

    const [searchkey, setsearchkey] = useState("");
    const [category, setcategory] = useState("all");

    const dispatch = useDispatch();

    return (
        <div>
            <header className="header header-intro-clearance header-3">
                <div className="header-top">
                    <div className="container">
                        <div className="header-left">
                            <a href="tel:#">
                                <i className="icon-phone"></i>Call: +0123 456
                                789
                            </a>
                        </div>

                        <div className="header-right">
                            <ul className="top-menu">
                                <li>
                                    <a href="#">Links</a>
                                    <ul>
                                        <li>
                                            <div className="header-dropdown">
                                                <a href="#">TND</a>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li>
                                                            <a href="#">Eur</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Usd</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="header-dropdown">
                                                <a href="#">English</a>
                                                <div className="header-menu">
                                                    <ul>
                                                        <li>
                                                            <a href="#">
                                                                English
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                French
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#">
                                                                Spanish
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        {currentUser ? (
                                            <div className="dropdown">
                                                <button
                                                    className=" user  dropdown-toggle   md-2"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    {currentUser.username}
                                                </button>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton"
                                                >
                                                    <a
                                                        className="dropdown-item"
                                                        href="/orders"
                                                    >
                                                        Orders
                                                    </a>
                                                    {currentUser.email ===
                                                    "admin@lucastore.com" ? (
                                                        <a
                                                            className="dropdown-item"
                                                            href="/admin/productslist"
                                                        >
                                                            Manager
                                                        </a>
                                                    ) : null}
                                                    <li
                                                        className="dropdown-item"
                                                        onClick={() => {
                                                            dispatch(
                                                                logoutUser()
                                                            );
                                                        }}
                                                    >
                                                        Logout
                                                    </li>
                                                </div>
                                            </div>
                                        ) : (
                                            <li>
                                                <a href="/login">
                                                    Sign in / Sign up
                                                </a>
                                            </li>
                                        )}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <div className="container">
                        <div className="header-left">
                            <button className="mobile-menu-toggler">
                                <span className="sr-only">
                                    Toggle mobile menu
                                </span>
                                <i className="icon-bars"></i>
                            </button>

                            <a href="/" className="logo">
                                <h4 style={{ color: "#fff" }}>Luca Store</h4>
                            </a>
                        </div>

                        <div className="header-center">
                            <div className="header-search header-search-extended header-search-visible d-none d-lg-block">
                                <a
                                    href="#"
                                    className="search-toggle"
                                    role="button"
                                >
                                    <i className="icon-search"></i>
                                </a>

                                <div className="header-search-wrapper search-wrapper-wide">
                                    <label for="q" className="sr-only">
                                        Search
                                    </label>
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => {
                                            dispatch(
                                                filtreProducts(
                                                    searchkey,
                                                    category
                                                )
                                            );
                                        }}
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                    <input
                                        type="search"
                                        className="form-control"
                                        name="q"
                                        id="q"
                                        placeholder="Search product ..."
                                        required=""
                                        value={searchkey}
                                        onChange={(e) => {
                                            setsearchkey(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="header-right">
                            <div className="dropdown cart-dropdown">
                                <a
                                    href="/cart"
                                    className="dropdown-toggle"
                                    role="button"
                                >
                                    <div className="icon">
                                        <i className="fas fa-shopping-cart"></i>
                                        <span className="cart-count">
                                            {cartItems.length}
                                        </span>
                                    </div>
                                    <p>Cart</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Navbar;

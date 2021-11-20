import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

function Products({ product }) {
    return (
        <div>
            <Link to={`product/${product._id}`}>
                <div class="product product-2">
                    <figure class="product-media">
                        <img
                            src={product.imgurl}
                            alt="Product image"
                            class="product-image"
                        />

                        <div class=" product-action product-action-dark ">
                            <a
                                href="#"
                                class=" btn-product btn-quickview "
                                title="Quick view"
                            >
                                <i class="fas fa-ticket-alt"></i>
                                <span>Quick view</span>
                            </a>
                        </div>
                    </figure>

                    <div class="product-body">
                        <div class="product-cat">
                            <a href="#">{product.name}</a>
                        </div>

                        <h3 class="product-title">
                            <a href="#">{product.name}</a>
                        </h3>

                        <div class="product-price">
                            {product.price} {product.unit}
                        </div>

                        <div class=" ratings-container ">
                            <div class="ratings">
                                <div
                                    class="  ratings-val "
                                    style={{ width: "60%" }}
                                ></div>
                            </div>

                            <span class="ratings-text">
                                ( {product.rating} Reviews )
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Products;

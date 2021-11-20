import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartAction";
import { getProductById } from "../../actions/productAction";
import { useToasts } from "react-toast-notifications";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import "./ProductsDescription.css";

function ProductsDescription({ match }) {
    const { addToast } = useToasts();
    const productid = match.params.id;
    const dispatch = useDispatch();

    const [quantity, setquantity] = useState(1);

    const getproductbyidstate = useSelector(
        (state) => state.getProductByIdReducer
    );

    const { product, loading, error } = getproductbyidstate;

    function addtocart() {
        dispatch(addToCart(product, quantity));
        addToast("You product was added successfully", {
            appearance: "success",
        });
    }

    useEffect(() => {
        dispatch(getProductById(productid));
    }, []);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Error error="Something wrong!" />
            ) : (
                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="product-gallery product-gallery-vertical">
                                        <div className="row">
                                            <figure className="product-main-image">
                                                <img
                                                    src={product.imgurl}
                                                    alt="product image"
                                                />

                                                <a
                                                    href="#"
                                                    id="btn-product-gallery"
                                                    className="btn-product-gallery"
                                                >
                                                    <i className="icon-arrows"></i>
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h1 className="product-title">
                                            {product.name}
                                        </h1>

                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "80%" }}
                                                ></div>
                                            </div>
                                            <a
                                                className="ratings-text"
                                                href="#product-review-link"
                                                id="review-link"
                                            >
                                                ( 2 Reviews )
                                            </a>
                                        </div>

                                        <div className="product-price">
                                            {product.price} {product.unit}
                                        </div>

                                        <div className="product-content">
                                            <p>{product.description}</p>
                                        </div>

                                        <div className="details-filter-row details-row-size">
                                            <label for="size">Quantity:</label>
                                            <div className="select-custom">
                                                <select
                                                    value={quantity}
                                                    onChange={(e) => {
                                                        setquantity(
                                                            e.target.value
                                                        );
                                                    }}
                                                >
                                                    {" "}
                                                    {[
                                                        ...Array(
                                                            product.countInStock
                                                        ).keys(),
                                                    ].map((x, i) => {
                                                        return (
                                                            <option
                                                                value={i + 1}
                                                            >
                                                                {i + 1}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                        </div>

                                        <div className="product-details-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                onClick={addtocart}
                                            >
                                                <span>Add to cart</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductsDescription;

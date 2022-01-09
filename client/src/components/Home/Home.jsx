import React from "react";
import axios from "axios";
import Products from "../Product/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { getAllProducts } from "../../actions/productAction";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

function Home() {
    const getallproductsstate = useSelector(
        (state) => state.getAllProductsReducer
    );
    const { loading, products, error } = getallproductsstate;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div>
            <div className="row">
                {loading ? (
                    <Loader />
                ) : error ? (
                    <Error error="Something wrong!" />
                ) : (
        <iframe width="1076" height="440" src="https://www.youtube.com/embed/ilfT41MzmpE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    products.map((product) => {
                        return (
                            <div className="zoomoutcard col-md-3 mt-5 m-2         ">
                                <Products product={product} />
                                
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}

export default Home;

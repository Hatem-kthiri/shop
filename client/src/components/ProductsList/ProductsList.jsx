import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";
import { deleteProduct, getAllProducts } from "../../actions/productAction";
import { Link } from "react-router-dom";

function ProductsList() {
    const getallproductssstate = useSelector(
        (state) => state.getAllProductsReducer
    );

    const { products, loading, error } = getallproductssstate;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <div>
            <h2 className="usertitle">Products List</h2>

            <table className="tbadmin table table-bodered ">
                <thead>
                    <tr>
                        <th>Products Name</th>
                        <th>Prices</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {loading && <Loader />}
                    {error && <Error error="Something wrong!" />}

                    {products &&
                        products.map((product) => {
                            return (
                                <tr>
                                    <td>{product.name}</td>
                                    <td>{product.price} TND</td>
                                    <td>{product.countInStock}</td>
                                    <td>
                                        <i
                                            className="delete far fa-trash-alt mr-3 "
                                            onClick={() => {
                                                dispatch(
                                                    deleteProduct(product._id)
                                                );
                                            }}
                                        ></i>{" "}
                                        <Link
                                            to={`/admin/editproduct/${product._id}`}
                                        >
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default ProductsList;

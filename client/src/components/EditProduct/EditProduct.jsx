import React, { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Success from "../Success/Success";

function EditProduct({ match }) {
  const dispatch = useDispatch();

  const productstate = useSelector((state) => state.getProductByIdReducer);

  const { product, loading, error } = productstate;

  const updateproductstate = useSelector( state => state.updateProductReducer)
  const {success , updateerror , updateloading} = updateproductstate

  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [countinstock, setcountinstock] = useState();
  const [imgurl, setimgurl] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [unit, setunit] = useState("");

  useEffect(() => {
    if (product) {
      if (product._id == match.params.productid) {
        setname(product.name);
        setprice(product.price);
        setcountinstock(product.countInStock);
        setimgurl(product.imgurl);
        setcategory(product.category);
        setdescription(product.description);
        setunit(product.unit);
      } else {
        dispatch(getProductById(match.params.productid));
      }
    } else {
      dispatch(getProductById(match.params.productid));
    }
  }, [dispatch, product]);

  function editproduct(e) {
    e.preventDefault();
    const updatedproduct = {
      name: name,
      price: price,
      unit: unit,
      countInStock: countinstock,
      imgurl: imgurl,
      description: description,
      category: category,
    };

    dispatch(updateProduct(match.params.productid, updatedproduct));
  }

  return (
    <div>
      <h2 className="usertitle">Update Product</h2>
        {loading && (<Loader />)}
        {updateloading && (<Loader />)}
        {updateerror && (<Error error="Something wrong!" />)}
        {error && (<Error error="Something wrong!" />)}
        {success && (<Success success="Product Updated Seccessfully" />)}

      {product && (
        <div className="row">
          <div className="col-md-8">
            <form onSubmit={editproduct}>
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Name ..."
                required
                value={name}
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
              <input
                type="number"
                className="form-control mb-2 mr-sm-2"
                placeholder="Price ..."
                required
                value={price}
                onChange={(e) => {
                  setprice(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Unit ..."
                required
                value={unit}
                onChange={(e) => {
                  setunit(e.target.value);
                }}
              />

              <input
                type="number"
                className="form-control mb-2 mr-sm-2"
                placeholder="Stock ..."
                required
                value={countinstock}
                onChange={(e) => {
                  setcountinstock(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Image URL ..."
                required
                value={imgurl}
                onChange={(e) => {
                  setimgurl(e.target.value);
                }}
              />
              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Decription ..."
                required
                value={description}
                onChange={(e) => {
                  setdescription(e.target.value);
                }}
              />

              <input
                type="text"
                className="form-control mb-2 mr-sm-2"
                placeholder="Category ..."
                required
                value={category}
                onChange={(e) => {
                  setcategory(e.target.value);
                }}
              />

              <button
                className="btn mt-2"
                type="submit"
                style={{ float: "right" }}
              >
                Update Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProduct;

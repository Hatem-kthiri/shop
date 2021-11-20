import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import "./Review.css";
import { addProductReview } from "../../actions/productAction";
import { useToasts } from 'react-toast-notifications'; 

function Review({ product }) {

  const { addToast } = useToasts();

  const dispatch = useDispatch();
  const [rating, setrating] = useState(5);
  const [comment, setcomment] = useState("");

  function sendreview() {

    if(localStorage.getItem("currentUser"))
    {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    var alreadyreviewed;

    for (var i = 0; i < product.reviews.length; i++) {
      if (product.reviews[i].userid == currentUser._id) {
        alreadyreviewed = true;
      }
    }


    if (alreadyreviewed) {
      alert("You have already reviewed this product!");
    } else {
      const review = {
        rating: rating,
        comment: comment,
      };

      dispatch(addProductReview(review, product._id));
      addToast('You Review was added successfully', { appearance: 'success' });
    }
    }
    else{
      window.location.href='/login'
    }


    
  }

  // console.log(product.reviews)

  // useEffect(() => {
  //   alert("changed")
  // }, [product.reviews])

  return (
    <div>
      <h5 className="titlerev">Give Your Review</h5>

      <ReactStars
        count={5}
        size={28}
        color={"black"}
        char={"☆"}
        isHalf={true}
        activeColor="#ffd700"
        onChange={(e) => {
          setrating(e);
        }}
      />

      <input
        type="text"
        className="form-control mt-2"
        value={comment}
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      />
      <button className="btn mt-3 ml-1" onClick={sendreview}>
        {" "}
        Submit Review{" "}
      </button>
      <hr />

      <h5 className="titlerev">Lastest Reviews</h5>
      {product.reviews && (product.reviews.map(review=>{
        return <div> 
          <ReactStars 
                        count={review.rating}
                        size={28}
                        color={"#ffd700"}
                        char={"☆"}
                        isHalf={true}
                        activeColor="#ffd700"
                        readonly
                        
                    />
                     
                    <p>{review.comment}</p>
                    <p>By : {review.name} </p>
                    <hr />
        </div>
      }))}
    </div>
  );
}

export default Review;

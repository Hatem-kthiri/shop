import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../actions/orderAction";
import Loader from "../Loader/Loader";
import Success from "../Success/Success";
import Error from "../Error/Error";

function Checkout({ amount }) {
    const dispatch = useDispatch();
    const orderstate = useSelector((state) => state.placeOrderReducer);

    const { loading, success, error } = orderstate;

    function tokenHandler(token) {
        console.log(token);
        dispatch(placeOrder(token, amount));
    }

    function validation() {
        if (!localStorage.getItem("currentUser")) {
            window.location.href = "/login";
        }
    }

    return (
        <div>
            {loading && <Loader />}
            {success && <Success success="Your Order Placed Successfully" />}
            {error && <Error error="Something wrong!" />}

            <StripeCheckout
                token={tokenHandler}
                amount={amount * 100}
                shippingAddress
                billingAddress
                currency="TTD"
                stripeKey="pk_test_51JxrVjAXnlvNh4GmQ590QnwZhi8poncR0DztJXkyQ4KIdIV42HQ5qTzZyHyugSMOtQn7kkUsEVcxuTAVy7nwwmm3001Ftapfx5"
            >
                <div className="bt">
                    <button
                        className="pay-btn"
                        style={{
                            padding: "0.5rem 1rem",
                            maxWidth: "198px",
                            color: "#c96",
                            border: "0.1rem solid #c96",
                            position: "relative",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.8rem",
                            lineHeight: "1",
                            transition: "all 0.35s ease",
                            paddingTop: "1.9rem",
                            paddingBottom: "1.9rem",
                            flexGrow: 1,
                            flexBasis: 0,
                        }}
                        onClick={validation}
                    >
                        PAY NOW
                    </button>
                </div>
            </StripeCheckout>
        </div>
    );
}

export default Checkout;

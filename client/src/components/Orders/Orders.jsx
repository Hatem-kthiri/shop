import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import { getOrdersByUserId } from "../../actions/orderAction";
import { getAllProducts } from "../../actions/productAction";

import "./Orders.css";

function Orders() {

    const orderstate=useSelector(state=>state.getOrdersByUserIdReducer)
    const { orders, error , loading } = orderstate
  

    const dispatch = useDispatch()

    useEffect(() => {
       if(localStorage.getItem('currentUser'))
       {
          dispatch(getOrdersByUserId())
          
       }
       else{
           window.location.href='/login'
       }
    }, [])




  return (
    <div className="listor">
      <div className="row justify-content-left mt-5">
        <div className="col-md-8">
          <h2>MY ORDERS</h2>
          <br />

          <table className="table table-striped ">
            <thead className='thead-dark'>
              <tr>
                <th>Order ID</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {loading && (<Loader/>)}
              {orders && (orders.map(order=>{
                return <tr>
                  
                  <td>{order._id}</td>
                  <td>{order.orderAmount} TND</td>
                  <td>{order.createdAt}</td> 
                  <td>{order.transactionId}</td>
                  <td>{order.isDelivered ? ( <li> Delivered </li> ) : ( <li> Order Placed </li> )}</td>
                </tr>

              }))}
                
                {error && <Error error ='Something wrong!'/>}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;

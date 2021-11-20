import React, {useEffect}  from 'react'
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader"
import Error from "../Error/Error"
import { getAllOrders } from '../../actions/orderAction';



function OrdersList() {
     
    const getordersstate = useSelector((state) => state.getAllOrdersReducer);

    const { orders, loading, error } = getordersstate;

    const dispatch = useDispatch()

    useEffect(() => {
       
          dispatch(getAllOrders())
       
    }, [])
    return (
        <div>
            <h2 className="usertitle">Orders List</h2>
            {loading && (<Loader />)}
            {error && (<Error error="Something wrong!" />)}
            <table className="tbadmin table table-bodered ">
            <thead>
          <tr>
            <th>Orders ID</th>
            <th>Emails</th>
            <th>Users ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transactions ID</th>
          </tr>
          </thead>

          <tbody>
              {orders && (orders.map(order=>{
                  return <tr>
                      <td>{order._id}</td>
                      <td>{order.email}</td>
                      <td>{order.userid}</td>
                      <td>{order.orderAmount} TND</td>
                      <td>{order.createdAt}</td>
                      <td>{order.transactionId}</td>
                      
                  </tr>
              }))}
          </tbody>
        
            </table>
        </div>
    )
}

export default OrdersList

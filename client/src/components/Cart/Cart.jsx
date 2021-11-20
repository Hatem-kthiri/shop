import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart , deleteFromCart } from '../../actions/cartAction'
import Checkout from '../Checkout/Checkout'
import './Cart.css'

function Cart() {

    const cartreducerstate = useSelector(state=> state.cartReducer)
    const dispatch = useDispatch()
    const {cartItems} = cartreducerstate

    var subtotal = cartItems.reduce((acc , item) => acc + (item.price*item.quantity) , 0)
    
    return (
        <div>
            <div className='row'>
                <div className="col-md-8  text-center mt-5">
                    <h2 className='title'>MY CART</h2>
                    <br/>
                    <table className="table table-bordered">
                        <thead>
                           
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th className='total'>Total Price</th>
                            <th>Delete</th>
                        </tr>
                        </thead>

                        <tbody>
                            {cartItems.map(item=>{
                                return <tr>
                                    <td>{item.name}</td>
                                    <td className='unit'> {item.price} {item.unit} </td>
                                    <td><select value={item.quantity} onChange={(e)=>{dispatch(addToCart(item , e.target.value))}}>
                                         {[...Array(item.countInStock).keys()].map((x , i)=>{
                                       return  <option value={i+1}> {i+1} </option>
                                    })}</select></td>
                                    <td>{item.quantity * item.price} {item.unit} </td>
                                    <td className="delete"><i class="far fa-trash-alt " onClick={()=>{dispatch(deleteFromCart(item))}}></i></td>
                                </tr>
                            })}
                        </tbody>
                      
                    </table>
                    <hr />

                     <h2 className='text-center'>SubTotal : {subtotal} TND </h2> 

                     <hr />

                     <Checkout amount={subtotal}/>

                     <hr />
                    
                </div>

            </div>
        </div>
    )
}


export default Cart

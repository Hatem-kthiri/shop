import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import UsersList from "../UsersList/UsersList"
import ProductsList from "../ProductsList/ProductsList"
import AddNewProduct from "../AddNewProduct/AddNewProduct"
import OrdersList from "../OrdersList/OrdersList"
import "./Admin.css"
import EditProduct from '../EditProduct/EditProduct'

function Admin() {
    return (
        <div>
            <div className="row"> 
                <div className="col-md-10">
                    <ul className="admin">
                        <li><Link to ="/admin/userslist" style={{color:'white'}}> Users List </Link></li>
                        <li><Link to ="/admin/productslist" style={{color:'white'}}> Products List </Link></li>
                        <li><Link to ="/admin/addnewproduct" style={{color:'white'}}> Add New Product </Link></li>
                        <li><Link to ="/admin/orderslist" style={{color:'white'}}> Orders List </Link></li>
                    </ul>

                    <Switch>
                        <Route path="/admin/userslist" component={UsersList}/>
                        <Route path="/admin/productslist" component={ProductsList}/>
                        <Route path="/admin/addnewproduct" component={AddNewProduct}/>
                        <Route path="/admin/orderslist" component={OrdersList}/>
                        <Route path="/admin/editproduct/:productid" component={EditProduct}/>


                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Admin

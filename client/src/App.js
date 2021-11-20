import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import ProductsDescription from "./components/ProductsDescription/ProductsDescription";
import Cart from "./components/Cart/Cart";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Footer from "./components/Footer/Footer";
import { ToastProvider } from "react-toast-notifications";

function App() {
    return (
        <ToastProvider
            placement="top-center"
            autoDismiss="true"
            autoDismissTimeout={4000}
        >
            <div className="App">
                <Navbar />
                <BrowserRouter>
                    <Route path="/" component={Home} exact />
                    <Route
                        path="/product/:id"
                        component={ProductsDescription}
                    />
                    <Route path="/cart" component={Cart} />
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/orders" component={Orders} />
                    <Route path="/admin" component={Admin} />
                </BrowserRouter>

                <Footer />
            </div>
        </ToastProvider>
    );
}

export default App;

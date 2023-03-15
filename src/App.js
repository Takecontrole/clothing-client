import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Login from "./pages/Login";
import Announcement from "./components/Announcement";
/*
import Signup from "./pages/Signup";
import Consultation from "./pages/Consultation";
import { useDispatch, useSelector } from "react-redux";
import ProductPage from "./pages/ProductPage";

import CartPage from "./pages/CartPage";
import OrdersPage from "./pages/OrdersPage";
import NewProduct from "./pages/NewProduct";
import EditProductPage from "./pages/EditProductPage";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { addNotification } from "./features/userSlice";
import AdminDashboard from "./pages/AdminDashboard";
*/

function App() {
  /*
  const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {
        const socket = io("ws://localhost:8080");
        socket.off("notification").on("notification", (msgObj, user_id) => {
            // logic for notification
            if (user_id === user._id) {
                dispatch(addNotification(msgObj));
            }
        });

        socket.off("new-order").on("new-order", (msgObj) => {
            if (user.isAdmin) {
                dispatch(addNotification(msgObj));
            }
        });
    }, []);
    */
  return (
        <div className="App">
            <HashRouter>
                <ScrollToTop />
                <Announcement/>
               
               
                
                <Routes>
                    <Route index element={<Home />} />

                            <Route path="/login" element={<Login />} />

                 


                  
                </Routes>
                
            </HashRouter>
            
        </div>
    );
}

export default App;

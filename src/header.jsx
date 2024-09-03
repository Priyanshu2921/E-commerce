import React from "react";
import "./header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { Button } from "@mui/material";


export function Header() {
    return (
        <div>
            <div className="header">
                <div className="header_menuicon">
                    <MenuIcon />
                </div>
                <img
                    className="logo"
                    src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                    alt="logo"
                />
                <div className="Address">
                    <div className="header_location">Delivering to New Delhi 110043</div>
                    <div className="update_location">
                        <EditLocationAltIcon />
                        <button>Update Location</button>
                    </div>
                </div>
                <div className="search_bar">
                    <input className="input_bar" placeholder="Search Amazon IN" />
                    <div className="searchIcon">
                        <SearchIcon />
                    </div>
                </div>

                <Button className="header_language">EN</Button>
                <button className="header_account">
                    <div className="header_acc">Hello, Sign in<br /></div>
                    <div className="header_st">
                        <strong>Account & Lists</strong>
                    </div>
                </button>
                <button className="header_orders">
                    <div className="return">Returns<br /></div>
                    <div className="orders">
                        <strong>& Orders</strong>
                    </div>
                </button>
                <div className="cart_icon">
                    <div className="cartItems">0</div>
                    <button>
                        <ShoppingCartIcon />
                    </button>
                </div>
            </div>

            <div className="header_navbar">
                <p>All</p>
                <p>Fresh</p>
                <p>Amazon miniTV</p>
                <p>Sell</p>
                <p>Best Sellers</p>
                <p>Today's Deals</p>
                <p>Mobiles</p>
                <p>Customer Service</p>
                <p>Prime</p>
                <p>Electronics</p>
                <p>Fashion</p>
                <p>New Releases</p>
                <p>Home & Kitchen</p>
                <p>Amazon Pay</p>
                <p>Computers</p>
            </div>
        </div>
    );
}

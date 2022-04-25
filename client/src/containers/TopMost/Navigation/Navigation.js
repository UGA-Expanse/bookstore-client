import React, { useContext, useState } from "react";
import {Context, useUserContext} from "../../../config/connector";
import { useNavigate, useLocation } from 'react-router';
import { Link, Navigate } from "react-router-dom";


import { Menu } from "antd";
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons';
// import { MenuDivider } from Menu;
// Divider: React.FC<import("./MenuDivider").MenuDividerProps>;

import SignUp from "../../../components/navigation/SignUp";
import SignIn from "../../../components/navigation/SignIn";
import Cart from "../../../components/navigation/Cart";


const menuStyle = {
    flex: 'auto',
    justifyContent: 'flex-end',
    backgroundColor: '#FFF'
}


export const Navigation = () => {
    const userContext = useUserContext();
    const { user, cart, removeUser, getCart } = userContext;

    console.log(`Navigation.js>start>>user:${JSON.stringify(user)}`);

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    const path = "home";
    const [ activeItem, setActiveItem ] = useState(path);

    let navigate = useNavigate();

    // Functions
    const handleClick = e => {
        switch (e.key) {
            case "signoff" :
                removeUser();
                break;
            case "cart" :
                navigate("/cart");
                break;
        }
    };

    const handleItemClick = (e, { name }) => setActiveItem(name);
    // States
    const view = user ? (
        
        <Menu
            selectedKeys={[path]}    
            theme="light" mode=
            "horizontal"
            className="header__nav"
            style={menuStyle}
            disabledOverflow={true}
            onClick={handleClick}>
                <Menu.Item key="account">Account</Menu.Item>
                <Menu.Item key="signoff">Sign Off</Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingOutlined />}>Shopping Cart</Menu.Item>
            </Menu>
    ) : (
        <Menu
            theme="light" 
            mode="horizontal" 
            selectedKeys={[path]}    
            className="header__nav"
            style={menuStyle}
            disabledOverflow={true}
            onClick={handleClick}>
                <Menu.Item key="signup"><SignUp /></Menu.Item>
                <Menu.Item key="signin"><SignIn /></Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingOutlined />}>Shopping Cart</Menu.Item>
            </Menu>
    );

    console.log(`Navigation.js>end>>cart:${JSON.stringify({})}`);
    return view; // return

} // export

export default Navigation;

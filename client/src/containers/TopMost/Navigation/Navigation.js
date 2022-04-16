import React, { useContext, useState } from "react";
import AppContext from "../../../context/AppContext";
import { Link } from "react-router-dom";


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
    const appContext = useContext(AppContext);
    const { disableNavigation, user, getUser, checkUser, isLoggedOut } = appContext;

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    const path = "home";
    const [ activeItem, setActiveItem ] = useState(path);


    // Functions
    const handleClick = events => {
        console.log(events.target);
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
            onClick={handleClick}>
                <Menu.Item key="account">Account</Menu.Item>
                <Menu.Item key="signoff">Sign Off</Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingOutlined />}><Cart/></Menu.Item>
            </Menu>
    ) : (
        <Menu
            theme="light" 
            mode="horizontal" 
            selectedKeys={[path]}    
            className="header__nav"
            style={menuStyle}
            onClick={handleClick}>
                <Menu.Item key="signup"><SignUp /></Menu.Item>
                <Menu.Item key="signin"><SignIn /></Menu.Item>
                <Menu.Item key="cart" icon={<ShoppingOutlined />}><Cart/></Menu.Item>
            </Menu>
    );

    return view; // return

} // export

export default Navigation;

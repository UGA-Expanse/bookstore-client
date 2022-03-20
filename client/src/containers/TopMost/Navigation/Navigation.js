import {
    Menu
} from "antd";

import { useContext } from "react";
import LogoutContext from "../../../context/LogoutContext";

export const Navigation = () => {
    const logoutContext = useContext(LogoutContext);
    const { isLoggedOut } = logoutContext;

    return (
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} className="header__nav">
            <Menu.Item key="1">Account</Menu.Item>
            <Menu.Item key="2">Shopping Cart</Menu.Item>
            <Menu.Item key="3">{ (isLoggedOut) ? "Login" : "Logout" }</Menu.Item>
        </Menu>
    ); // return
} // export

export default Navigation;
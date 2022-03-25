import {
    Menu
} from "antd";
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons';

import { useContext } from "react";
import LogoutContext from "../../../context/LogoutContext";

import SignUp from "../../../components/navigation/SignUp";
import SignIn from "../../../components/navigation/SignIn";

const menuStyle = {
    flex: 'auto',
    justifyContent: 'flex-end'
}

export const Navigation = () => {
    const logoutContext = useContext(LogoutContext);
    const { isLoggedOut } = logoutContext;

    return (
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']} className="header__nav" style={menuStyle}>
            <Menu.Item key="3">{ (isLoggedOut) ? <SignUp /> : "Account" }</Menu.Item>
            <Menu.Item key="1">{ (isLoggedOut) ? <SignIn /> : "Sign Off" }</Menu.Item>
            <Menu.Item key="2" icon={<ShoppingOutlined />}>Shopping Bag</Menu.Item>
        </Menu>
    ); // return
} // export

export default Navigation;
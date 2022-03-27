import {
    Menu
} from "antd";
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons';

import { useContext } from "react";
import LogoutContext from "../../../context/LogoutContext";

import SignUp from "../../../components/navigation/SignUp";
import SignIn from "../../../components/navigation/SignIn";

const menuStyle = {
    justifyContent: 'flex-start'
}

export const SubNavigation = () => {
    const logoutContext = useContext(LogoutContext);
    const { isLoggedOut } = logoutContext;

    return (
        <Menu theme="light" mode="horizontal"  className="header__nav" style={menuStyle} disabledOverflow={true}>
            <Menu.Item key="1">Books</Menu.Item>
            <Menu.Item key="5">New Releases</Menu.Item>
            <Menu.Item key="2">Textbooks</Menu.Item>
            <Menu.Item key="3">Magazines</Menu.Item>
            <Menu.Item key="4">Comics & Graphic Novels</Menu.Item>
        </Menu>
    ); // return
} // export

export default SubNavigation;
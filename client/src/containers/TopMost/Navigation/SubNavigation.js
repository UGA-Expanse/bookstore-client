import React, { useContext, useState } from "react";
import {Context, useUserContext} from "../../../config/connector";
import { useNavigate } from 'react-router';

import {
    Menu
} from "antd";
import { ShoppingOutlined, ShoppingFilled } from '@ant-design/icons';

const menuStyle = {
    justifyContent: 'flex-start'
}


export const SubNavigation = () => {
    const userContext = useUserContext();
    const { disableNavigation, user, getUser, checkUser, isLoggedOut } = userContext;

    let navigate = useNavigate();

    const path = "home";
    const [ activeItem, setActiveItem ] = useState(path);

    const handleClick = ( e ) => {
        console.log("e.click", e.key);
        switch (e.key) {
            case "books" :
                navigate('/');
                break;
            case "newreleases" :
                navigate('/category/new-release');
                break;
            case "textbooks" :
                navigate('/category/textbooks');
                break;
            case "magazines" :
                navigate('/category/magazines');
                break;
            case "comics" :
                navigate("/category/comics");
                break;
            default:
                break;
        }
    };

    const view = (
        <Menu 
                theme="light" 
                mode="horizontal"  
                className="header__nav" 
                style={menuStyle} 
                disabledOverflow={true}
                onClick={handleClick}>
            <Menu.Item key="books">Books</Menu.Item>
            <Menu.Item key="newreleases">New Releases</Menu.Item>
            <Menu.Item key="textbooks">Textbooks</Menu.Item>
            <Menu.Item key="magazines">Magazines</Menu.Item>
            <Menu.Item key="comics">Comics & Graphic Novels</Menu.Item>
        </Menu>
    ); // return

    return view;
} // export

export default SubNavigation;
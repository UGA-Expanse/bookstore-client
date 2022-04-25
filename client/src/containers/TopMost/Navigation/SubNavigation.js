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
    const { disableNavigation, user, getUser, checkUser, isLoggedOut, getBooks, getCategories } = userContext;

    let navigate = useNavigate();

    const path = "home";
    const [ activeItem, setActiveItem ] = useState(path);
    const controller = (target) => {
        const [section, search, locationKey, path] = target;
        getBooks(target);
        navigate(path);
    }

    const handleClick = ( e ) => {
        console.log("e.click", e.key);
        let target, section, searchQuery, locationKey, pathVar;

        switch (e.key) {
            case "books" :
                section = '/books';
                searchQuery = ``;
                locationKey = "home";
                pathVar = "/";
                target = [section, searchQuery, locationKey, pathVar];
                controller(target);
                break;
            case "newreleases" :
                navigate('/category/new-releases');
                break;
            case "textbooks" :
                navigate('/category/textbooks');
                break;
            case "magazines" :
                navigate('/category/magazines');
                break;
            case "comics" :
                section = '/category/comics';
                searchQuery = '';
                locationKey = "comics";
                pathVar = "/category/comics";
                target = [section, searchQuery, locationKey, pathVar];
                controller(target);
                break;
            case "foreign" :
                section = '/category/foreign';
                searchQuery = '';
                locationKey = "foreign";
                pathVar = "/category/foreign";
                target = [section, searchQuery, locationKey, pathVar];
                controller(target);
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
            {/* <Menu.Item key="newreleases">New Releases</Menu.Item>
            <Menu.Item key="textbooks">Textbooks</Menu.Item> */}
            <Menu.Item key="comics">Comics & Graphic Novels</Menu.Item>
            <Menu.Item key="foreign">Foreign Books</Menu.Item>
        </Menu>
    ); // return

    return view;
} // export

export default SubNavigation;
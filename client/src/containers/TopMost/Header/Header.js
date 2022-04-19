import React, { useContext, useState } from "react";
import {Context, useUserContext} from "../../../config/connector";
import { useNavigate } from 'react-router';

import {
    Layout,
    Input,
    Space,
    Select,
    Menu
} from "antd";
import "antd/dist/antd.css";
import "./Header.scss";

import "../../../components/CustomerActionIcons";
import {CustomerActionIcons} from "../../../components/CustomerActionIcons";
import Navigation from "../Navigation/Navigation";
import SubNavigation from "../Navigation/SubNavigation";

const { Search, Button } = Input;
const { Option } = Select;

export const Header = props => {

    let navigate = useNavigate();
    const userContext = useUserContext();
    const { disableNavigation, user, getUser, books, checkUser, isLoggedOut, getBooks, getCategories } = userContext;

    let booksCopy;
    var activeNavigation;
    const onSearch = value => {
        let searchQuery = `?criteria=${searchSelectedCriteria}&term=${value}`;
        // navigate(searchPath );
        const section = "/search";
        const target = [section, searchQuery, "search", section+searchQuery];
        controller(target);
    };

    console.log("evaluationg books..............", books != booksCopy, activeNavigation);
    if (books != booksCopy && activeNavigation) {
        console.log("eval... 2");
        console.log("eval navigating....");
        // navigate(activeNavigation);
    }

    let searchSelectedCriteria = "books";
    const handleCategorySelect = (value) => {
        searchSelectedCriteria = value;
    }

    const selectBefore = (
        <Select defaultValue="books" className="select-after" onSelect={handleCategorySelect}>
            <Option value="books">Books</Option>
            <Option value="by_author">Authors</Option>
            <Option value="by_publisher">Publisher</Option>
            <Option value="by_year">by Year</Option>
        </Select>
    );

    const controller = (target) => {
        const [section, search, locationKey, path] = target;
        console.log("eval ontroller.....");

        // if (locationKey != location.key) {// || section == "/search") { //} && path != props.section && books?.length != 0)) {
            // useEffect(() => {
                booksCopy = books;
                getBooks(target);
                navigate(path)
            //   }, [path]);
        // } else {
        //     console.log("Skipping data load");
        // }

    }
  

    const headerLogoContainerStyle = {
        minWidth: "200px",
        width: "300px",
        cursor: "pointer"
    };

    const headerMainContainerStyle = {
        flexGrow: 2
    };

    const headerNavContainerStyle = {
        flexGrow: 1
    }

    const handleExpanseLogoClick = () => {
        console.log("eval handle.......");
    
        const target = ["/books", "", "mainwin", "/"];
        controller(target);
    }

    const view = (
        <>
        <Layout.Header className="header__main">

            <div style={headerLogoContainerStyle} className={"header__logo-container"} 
                    onClick={handleExpanseLogoClick}>
                <span className="logo">expanse</span>
            </div>

            <div style={headerMainContainerStyle} className={"header__main-container"}>

                <Search className="search-input-wrapper"
                        placeholder="input search text"
                        onSearch={onSearch}
                        enterButton
                        size="large"
                        addonBefore={selectBefore}
                />
            </div>
            <div style={headerNavContainerStyle} className={"header__nav-container"}>
                <Navigation />
            </div>
        </Layout.Header>
            <Layout.Header className="header__subnav"><SubNavigation/></Layout.Header>
</>
    ); // return

    return view;
} // export Header

export default Header;
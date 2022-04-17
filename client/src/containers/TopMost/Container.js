import React, { useContext, useState } from "react";
import {Context, useUserContext} from "../../config/connector";
import { Navigate } from "react-router-dom";


import {
    Layout
} from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.css";


import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const mainStyle = {
    minHeight: '65vh',
    backgroundColor: '#FFF',
    alignItems: 'stretch',
    display: 'flex',
    direction: 'column',
    alignContent: 'center'
}
const footerStyle = {
    display: 'flex',
    alignContent: 'flex-end',
    minHeight: '200px',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    borderBbottom: "1px solid #F0F0F5",
    color: '#FFF',
    backgroundColor: '#232f3e',
}


export const Container = ({ children }) => {

    const appContext = useUserContext();
    const { disableNavigation, user, getUser, checkUser, path } = appContext;

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    let page;

    console.log("Path: ", path);
    const view = (path != page) ? (
        <Navigate to="path.selected" />
        ) : (
            <Layout className={"page"}>
                <Header />
                <Layout style={mainStyle}>
                    <Layout.Content>
                        { children }
                    </Layout.Content>
                </Layout>
                <Layout.Footer style={footerStyle}>
                    <Footer/>
                </Layout.Footer>
            </Layout>
        ); // return

    // set page variable
    page = path

    return view;

} // export TopMost

export default Container;
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
import { GET_CART } from "../../config/constants";

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
    const { disableNavigation, user, getUser, checkUser, path, cart, getCart } = appContext;

    console.log(`TopMost::Container.js>start>>cart:${JSON.stringify({})}`);

    console.log("----------------------------------");
    console.log("TOPMOST Cart: ", cart);
    console.log("TOPMOST user: ", user);
    console.log("TOPMOST Path: ", path);
    console.log("----------------------------------");

    const cartlocal = React.useEffect(() => {
        console.log("Retrieving CAER cart retrieval");
        // const cart = JSON.parse(localStorage.getItem('cart'));
        // console.log("CART:", cart);
        // if (!cart || cart.id == undefined) {
        //     alert("calling cart");
            getCart({cartid:0});
        // }
    }, []);

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    const view = (
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

        console.log(`TopMost::Container.js>end>>cart:${JSON.stringify([])}`);
    return view;

} // export TopMost

export default Container;
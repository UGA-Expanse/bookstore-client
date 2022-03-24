import {
    Layout
} from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.css";

import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";

import { useContext } from "react";
import AppContext from "../../context/AppContext";

export const Container = ({ children }) => {
    const appContext = useContext(AppContext);
    const { disableNavigation } = appContext;

    return (
        <Layout className={"page"}>
            <div className={"top-nav-row"}>
                <Navigation />
            </div>
            <Header />
            <Layout>
                <Layout.Content>
                    { children }
                </Layout.Content>
            </Layout>
            <Layout.Footer style={{ height: '200px', verticalAlign:'middle', textAlign: 'center' }}>UGA Expanse ©2022 Created by CSCI 4050 Group 10</Layout.Footer>
        </Layout>
    ); // return
} // export TopMost

export default Container;
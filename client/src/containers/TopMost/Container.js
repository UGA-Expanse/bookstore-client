import {
    Layout,
    Button,
    DatePicker,
    version
} from "antd";
import "antd/dist/antd.css";
import "./index.css";

import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";

import logo from "../../logo.svg";
import {useContext} from "react";
import AppContext from "../../context/AppContext";

export const Container = ({ children }) => {
    const appContext = useContext(AppContext);
    const { disableNavigation } = appContext;

    return (
        <Layout>
            <Header />
            <Layout>
                <Navigation />
                <Layout.Content>
                    { children }
                </Layout.Content>
            </Layout>
        </Layout>
    ); // return
} // export TopMost

export default Container;
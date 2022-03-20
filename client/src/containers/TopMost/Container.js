import {
    Layout
} from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.css";

import Header from "./Header/Header";

import { useContext } from "react";
import AppContext from "../../context/AppContext";

export const Container = ({ children }) => {
    const appContext = useContext(AppContext);
    const { disableNavigation } = appContext;

    return (
        <Layout>
            <Header />
            <Layout>
                <Layout.Content>
                    { children }
                </Layout.Content>
                <Layout.Footer><p>UGA Expanse</p></Layout.Footer>
            </Layout>
        </Layout>
    ); // return
} // export TopMost

export default Container;
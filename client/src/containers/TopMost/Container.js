import {
    Layout
} from "antd";
import "antd/dist/antd.css";
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import "./index.css";

import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

import { useContext } from "react";
import AppContext from "../../context/AppContext";

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
    const appContext = useContext(AppContext);
    const { disableNavigation } = appContext;

    return (
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
} // export TopMost

export default Container;
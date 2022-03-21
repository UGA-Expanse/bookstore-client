import {
    Layout,
    Input,
    Space,
    Menu
} from "antd";
import "antd/dist/antd.css";
import "./Header.scss";
import Navigation from "../Navigation/Navigation";

const { Search } = Input;

export const Header = props => {
    const onSearch = value => console.log(value);
    return (
        <Layout.Header className="header__main">
            <div className="ant-row">
                <div className="ant-col ant-col-xs-24 ant-col-sm-14">
                    <Space size={"middle"}>
                        <span className="logo">Expanse Bookstore</span>
                        <Search className="search-input-wrapper" placeholder="input search text" onSearch={onSearch} enterButton />
                    </Space>
                </div>
                <div className={"ant-col ant-col-xs-0 ant-col-sm-10"}>
                    <Navigation />
                </div>
            </div>
        </Layout.Header>
    ); // return
} // export Header

export default Header;
import {
    Layout,
    Badge,
    Popover
} from "antd";
import "antd/dist/antd.css";
import "./index.css";

export const Header = props => {
    return (
        <Layout.Header className="header__main">
            <div className="header__contents">
                Header
            </div>
        </Layout.Header>
    ); // return
} // export Header

export default Header;
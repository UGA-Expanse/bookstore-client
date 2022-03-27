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
    const onSearch = value => console.log(value);
    const selectBefore = (
        <Select defaultValue=".com" className="select-after">
            <Option value=".com">Books</Option>
            <Option value=".jp">Textbooks</Option>
            <Option value=".cn">Magazines</Option>
            <Option value=".org">Comics & Graphic Novels</Option>
        </Select>
    );

    const headerLogoContainerStyle = {
        minWidth: "200px",
        width: "300px"
    };

    const headerMainContainerStyle = {
        flexGrow: 2
    };

    const headerNavContainerStyle = {
        flexGrow: 1
    }

    return (
        <>
        <Layout.Header className="header__main">
            <div style={headerLogoContainerStyle} className={"header__logo-container"}>
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
} // export Header

export default Header;
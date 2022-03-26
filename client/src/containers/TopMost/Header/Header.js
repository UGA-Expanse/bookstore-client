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

const { Search, Button } = Input;
const { Option } = Select;

export const Header = props => {
    const onSearch = value => console.log(value);
    const selectBefore = (
        <Select defaultValue="by Title" className="select-before">
            <Option value=".org">by Author</Option>
            <Option value=".org">by ISBN</Option>
        </Select>
    );

    const selectAfter = (
        <Select defaultValue=".com" className="select-after">
            <Option value=".com">Books</Option>
            <Option value=".jp">Textbooks</Option>
            <Option value=".cn">Magazines</Option>
            <Option value=".org">Comics & Graphic Novels</Option>
        </Select>
    );

    return (
        <Layout.Header className="header__main">

                <Space size={"medium"}>
                    <span className="logo"><a href="/">Expanse</a></span>
                    {selectBefore}
                    <Search className="search-input-wrapper"
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                            size="large"
                            addonBefore={selectAfter}
                    />
                    <Navigation />
                </Space>

        </Layout.Header>
    ); // return
} // export Header

export default Header;
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

const { Search, Button } = Input;
const { Option } = Select;

export const Header = props => {
    const onSearch = value => console.log(value);
    const selectBefore = (
        <Select defaultValue="http://" className="select-before">
            <Option value="http://">http://</Option>
            <Option value="https://">https://</Option>
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
            <div className="ant-row header--top-row">
                <Space size={"medium"}>
                    <span className="logo">Expanse</span>
                    <Search className="search-input-wrapper"
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                            size="large"
                            addonBefore={selectAfter}
                    />
                    <CustomerActionIcons/>
                </Space>
            </div>
        </Layout.Header>
    ); // return
} // export Header

export default Header;
import React from "react";
import { Menu } from "antd";
import {FileAddTwoTone, DeleteTwoTone, EditTwoTone, ShoppingOutlined} from '@ant-design/icons';

const InventoryControls = () => {
    const menuStyle = {
        flex: 'auto',
        justifyContent: 'flex-start'
    }

    return (
        <Menu theme="light" mode="horizontal"  className="inventory-container__menu" style={menuStyle}>
            <Menu.Item key="3" icon={<FileAddTwoTone />}>Add</Menu.Item>
            <Menu.Item key="1" icon={<EditTwoTone />}>Edit</Menu.Item>
            <Menu.Item key="2" icon={<DeleteTwoTone />}>Remove</Menu.Item>
        </Menu>
    ); // return
} // InventoryControls

export default InventoryControls;
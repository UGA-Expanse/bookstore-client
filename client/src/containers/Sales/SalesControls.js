import {
    useEffect,
    useState
} from "react";
import { Menu } from "antd";
import {PlusCircleTwoTone, VerticalAlignMiddleOutlined, CalculatorOutlined, StarOutlined} from '@ant-design/icons';

const SalesControls = () => {
    const menuStyle = {
        flex: 'auto',
        justifyContent: 'flex-start'
    }
    return (
        <>
            <Menu theme="light" mode="horizontal"  className="inventory-container__menu" style={menuStyle}>
                <Menu.Item key="3" icon={<CalculatorOutlined />}>Sales Summary by Publisher Report</Menu.Item>
                <Menu.Item key="1" icon={<VerticalAlignMiddleOutlined />} >Customer Order Forecast Report</Menu.Item>
                <Menu.Item key="2" icon={<StarOutlined />}  >Top Performers</Menu.Item>
            </Menu>
        </>
    ); // return
} // InventoryControls

export default SalesControls;
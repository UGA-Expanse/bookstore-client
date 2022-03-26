import {
    useState
} from "react";

import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import StockForm from "./StockForm"

export const InventoryDrawer = (props) => {
    const {
        visible=false,
        onCloseFunc
    } = props;
    // const [visible, setVisible] = useState(isvisible);

    const handleShowDrawer = () => {
        console.log("writing");
        // this.setVisible(true);
    };

    return (
        <Drawer
            title="Add a new book"
            width={720}
            onClose={onCloseFunc}
            visible={visible}
            bodyStyle={{ paddingBottom: 80 }}
            extra={
                <Space>
                    <Button onClick={onCloseFunc}>Cancel</Button>
                    <Button onClick={onCloseFunc} type="primary">Submit</Button>
                </Space>
            }
        ><StockForm /></Drawer>
    ); // return
} // Drawer

export default InventoryDrawer;
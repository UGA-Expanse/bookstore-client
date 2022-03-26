import {
    useEffect,
    useState
} from "react";
import { Menu } from "antd";
import {PlusCircleTwoTone, DeleteTwoTone, EditTwoTone, ShoppingOutlined} from '@ant-design/icons';
import InventoryDrawer from "./InventoryDrawer";

const InventoryControls = () => {
    const menuStyle = {
        flex: 'auto',
        justifyContent: 'flex-start'
    }

    const [drawerVisibility, setDrawerIsVisibile] = useState(false);

    const handleOnClose = () => {
        setDrawerIsVisibile(() => false );
    };

    const handleAddClick = () => {
        setDrawerIsVisibile(() => true );
    }

    const handleEditClick = () => {
        setDrawerIsVisibile(() => true );
    }

    const handleRemoveClick = () => {
        setDrawerIsVisibile(() => true );
    }

    return (
        <>
            <Menu theme="light" mode="horizontal"  className="inventory-container__menu" style={menuStyle}>
                <Menu.Item key="3" icon={<PlusCircleTwoTone />} onClick={ handleAddClick }>Add</Menu.Item>
                <Menu.Item key="1" icon={<EditTwoTone />} onClick={ handleEditClick }>Edit</Menu.Item>
                <Menu.Item key="2" icon={<DeleteTwoTone />}  onClick={ handleRemoveClick }>Remove</Menu.Item>
            </Menu>
            <InventoryDrawer
                onCloseFunc={handleOnClose}
                visible={drawerVisibility}
            />
        </>
    ); // return
} // InventoryControls

export default InventoryControls;
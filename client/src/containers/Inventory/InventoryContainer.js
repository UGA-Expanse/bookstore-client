import { useState } from 'react';
import { Typography, Table, PageHeader, Radio, Divider } from 'antd';
import Stock from "./Stock";
import InventoryControls from "./InventoryControls";
import data from "../../tmp/inventory_data.js"

const { Title } = Typography;



const InventoryContainer = () => {
    const publisherID = 1;

    return (
        <div className="inventory__container">
            <PageHeader
                className="inventory__page-header"
                title="Inventory"
                subTitle={"Atria Books"}
                footer={<InventoryControls/>}
            />
            <div className={"inventory__container-content"}>
                <Stock
                    publisher={ publisherID }
                    tableData={ data }
                />
            </div>
        </div>
    );
};

export default InventoryContainer;



import { useState } from 'react';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
    useRoutes
} from "react-router-dom";
import {
    PageHeader,
    Typography,
    Tabs
} from 'antd';
import Inventory from "../Inventory/InventoryContainer";
import Sales from "../Sales/SalesContainer";

const { Title } = Typography;
const { TabPane } = Tabs;

const MerchantViewContainer = () => {
    const publisherID = 1;
    const [activeTab, setActiveTab] = useState("sales");

    return (
        <div className="merchant-view__container">
            <PageHeader
                className="merchant-view__page-header"
                title={"Merchant View"}
                footer={
                    <Tabs
                        activeKey={activeTab}
                        onChange={key => setActiveTab(key) }
                    >
                        <TabPane tab="Sales" key={"sales"} />
                        <TabPane tab={"Inventory"} key={"inventory"} />
                    </Tabs>
                }
            />
            <div className={"merchant-view__container-content"}>
                <Sales />
            </div>
        </div>
    );
};

export default MerchantViewContainer;



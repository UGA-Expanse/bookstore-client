import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {Context, useUserContext} from "../../config/connector";


import {
    PageHeader,
    Typography,
    Tabs
} from 'antd';
import Inventory from "../Inventory/InventoryContainer";
import Sales from "../Sales/SalesContainer";
import SignIn from '../../components/access/SignIn';
import { GET_PRODUCTS } from '../../config/constants';

const { Title } = Typography;
const { TabPane } = Tabs;

const AffliatesView = (props) => {
    const appContext = useUserContext();
    const { user, path, books, getBooks, locationKey, getProducts, isAuthenticated } = appContext;

    const publisherID = 1;
    const [activeTab, setActiveTab] = useState("sales");
    console.log("USER:", user);
    const view = (!isAuthenticated() || getProducts()) ? (<SignIn/>) : 
        (<div className="page-view__container">
            <div className={"page-view__container-content"}>
                Affliates 
            </div>
        </div>
    );

    return view;
};

export default AffliatesView;



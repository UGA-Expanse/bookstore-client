import { useState } from 'react';
import { Typography, Table, PageHeader, Radio, Divider } from 'antd';
import InventoryControls from "../Inventory/InventoryControls";
import SalesControls from "./SalesControls";

const { Title } = Typography;

const data = [
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'I Love You to the Moon and Back',
        author: 'Eva Chen, Sophie Diao',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    },
    {
        key: '1',
        title: 'Atlas of the Heart: Mapping Meaningful Connection and the Language of Human Experience',
        author: 'John Brown',
        isbn: 32,
        date: 'New York No. 1 Lake Park',
        cost: '3.99',
        retail: '7.99',
        status: '100'
    }
]; // rowSelection object indicates the need for row selection

export const SalesContainer = () => {
    const publisherID = 1;

    return (
        <div className="sales__container">
            <PageHeader
                className="sales__page-header"
                title="Sales"
                footer={<SalesControls/>}
            />
        </div>
    );
};

export default SalesContainer;



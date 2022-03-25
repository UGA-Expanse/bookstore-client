import { useState } from 'react';
import { Typography, Table, PageHeader, Radio, Divider } from 'antd';
import Stock from "./Stock";
import InventoryControls from "./InventoryControls";

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

const InventoryContainer = () => {
    const publisherID = 1;

    return (
        <div className="inventory__container">
            <PageHeader
                className="inventory__page-header"
                title="Inventory"
                footer={
                    <InventoryControls/>
                }
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



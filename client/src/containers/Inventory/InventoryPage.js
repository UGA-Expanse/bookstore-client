import { useState } from 'react';
import { Typography, Table, Radio, Divider } from 'antd';

const { Title } = Typography;
const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Author(s)',
        dataIndex: 'author',
    },
    {
        title: 'ISBN',
        dataIndex: 'isbn',
    },
    {
        title: 'Publish Date',
        dataIndex: 'date',
    },
    {
        title: 'Cost',
        dataIndex: 'cost',
    },
    {
        title: 'Retail Price',
        dataIndex: 'retail',
    }
];

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

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
        disabled: record.name === 'Disabled User',
        // Column configuration not to be checked
        name: record.name,
    }),
};

export const InventoryPage = () => {
    const [selectionType, setSelectionType] = useState('checkbox');
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

    return (
        <div>
            <Title>Inventory</Title>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={data}
            />
        </div>
    );
};

export default InventoryPage;



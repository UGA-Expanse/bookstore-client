import React, {useState} from "react";
import {Table, Card} from "antd";

const Stock = props => {
    const {
        publisherID,
        tableData
    } = props;
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
    const [selectionType, setSelectionType] = useState('checkbox');
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };
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
            title: 'Publication date',
            dataIndex: 'date',
        },
        {
            title: 'Publisher',
            dataIndex: 'publisher'
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

    return (
        <>
            <Card className={"inventory-containter__card"}>
                <Table
                    rowSelection={{
                        type: selectionType,
                        ...rowSelection,
                    }}
                    columns={columns}
                    dataSource={ tableData }
                />
            </Card>
        </>
    ); // return
} // Stock

export default Stock;
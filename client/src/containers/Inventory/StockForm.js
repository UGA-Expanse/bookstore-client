import { useState } from "react";
import {Col, DatePicker, Form, Input, Row, Select, Upload, Button} from "antd";
import { UploadOutlined } from '@ant-design/icons';

const fileList = [
    {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
        uid: '-2',
        name: 'yyy.png',
        status: 'error',
    },
];

export const StockForm = (props) => {
    const [formData, setFormData] = useState(
        {title: "", publisher: ""}
    );
    const { Option } = Select;

    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        });
    } // handleChange

    return (
        <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="title"
                        label="Title"
                        rules={[{ required: true, message: 'Please enter book title' }]}
                    >
                        <Input placeholder="Please enter book title" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="author"
                        label="Author(s)"
                        rules={[{ required: true, message: 'Please enter an author' }]}
                    >
                        <Input placeholder="Please enter an author" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="summary"
                        label="Summary"
                        rules={[
                            {
                                required: false,
                                message: 'please enter a short summary',
                            },
                        ]}
                    >
                        <Input.TextArea rows={2} placeholder="please enter short summary" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    <Form.Item
                        name="description"
                        label="Description"
                        rules={[
                            {
                                required: true,
                                message: 'please enter url description',
                            },
                        ]}
                    >
                        <Input.TextArea rows={4} placeholder="please enter url description" />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="ISBN"
                        label="ISBN"
                        rules={[{ required: true, message: 'Please enter the ISBN' }]}
                    >
                        <Input placeholder="Please enter book's ISBN" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="category"
                        label="Category"
                        rules={[{ required: true, message: 'Please choose the category' }]}
                    >
                        <Select placeholder="Please choose the category">
                            <Option value="private">Fiction</Option>
                            <Option value="public">Non-fiction</Option>
                            <Option value="public">Textbook</Option>
                            <Option value="public">Magazine</Option>
                            <Option value="public">Comic</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="publisher"
                        label="Publisher"
                        rules={[{ required: true, message: 'Please enter the publisher' }]}
                    >
                        <Input placeholder="Please enter the publisher" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="publicationDate"
                        label="Publication Date"
                        rules={[{ required: true, message: 'Please choose the publication date' }]}
                    >
                        <DatePicker
                            style={{ width: '100%' }}
                            getPopupContainer={trigger => trigger.parentElement}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        name="cost"
                        label="Cost"
                        rules={[{ required: true, message: 'Please enter a cost' }]}
                    >
                        <Input placeholder="Please enter the publisher" />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item
                        name="retail"
                        label="Retail"
                        rules={[{ required: false, message: 'Please enter the retail price' }]}
                    >
                        <Input
                            placeholder="Please enter the retail price"
                            onChange={handleChange}
                            value={formData.retail}
                        />
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={24}>
                    Image(s): <Upload
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture"
                        defaultFileList={[...fileList]}
                        className="upload-list-inline"
                    >
                        <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                </Col>
            </Row>


        </Form>
    ); // return
} // StockForm

export default StockForm;
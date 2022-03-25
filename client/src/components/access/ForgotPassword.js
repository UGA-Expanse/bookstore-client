import {
    Form,
    Input,
    Button,
    Checkbox,
    Typography,
    Row,
    Col,
    Space
} from 'antd';

const { Title } = Typography;

const forgotPasswordStyle = {
    margin: 'auto',
    backgroundColor: '#FFFFFF'
}

export const ForgotPassword = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row style={forgotPasswordStyle}>
            <Col span={12} offset={6}>
                <Space direction="vertical">
                    <Title>Reset Password</Title>
                    <div>
                        WE WILL SEND YOU AN EMAIL TO RESET YOUR PASSWORD.
                    </div>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email address!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>



                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                        <div>
                            or Cancel
                        </div>
                    </Form>
                </Space>
            </Col>
        </Row>
    ); // return

} // SignIn

export default ForgotPassword;
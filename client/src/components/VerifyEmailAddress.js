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

const verifyEmailAddressStyle = {
    margin: 'auto',
    backgroundColor: '#FFFFFF'
}

export const VerifyEmailAddress = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row style={verifyEmailAddressStyle}>
            <Col span={12} offset={6}>
                <Space direction="vertical">
                    <Title>Verify your email</Title>
                    <div>
                        Check your email for a Expanse confirmation code.
                        If you do not have an email from support@expanse.j5.rocks,
                        then check your junk folder or resend the confirmation code.
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
                            label="Confirmation code"
                            name="confirmationcode"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your Confirmation Code!',
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
                                Confirm
                            </Button>
                        </Form.Item>
                        <div>
                            Need an account? Sign up here. Already have an account? Login here.
                        </div>
                    </Form>
                </Space>
            </Col>
        </Row>
    ); // return

} // SignIn

export default VerifyEmailAddress;
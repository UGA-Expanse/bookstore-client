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

const signUpStyle = {
    marginTop: '20px',
    backgroundColor: '#FFFFFF'
}

export const SignUp = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Row style={signUpStyle}>
            <Col span={12} offset={6}>
                <Space direction="vertical">
                    <Title>Create Account</Title>
                    <div>Create your account to access past orders and customer information.</div>
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
                            label="Firstname"
                            name="firstname"
                            rules={[
                                {
                                    required: true,
                                    message: 'FIRST NAME',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Lastname"
                            name="lastname"
                            rules={[
                                {
                                    required: true,
                                    message: 'LAST NAME',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

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
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Create An Account
                            </Button>
                        </Form.Item>
                        <div>
                            Already have an account? Log in.
                        </div>
                    </Form>
                </Space>
            </Col>
        </Row>
    ); // return

} // SignIn

export default SignUp;
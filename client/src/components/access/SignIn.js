import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import {Context, useUserContext} from "../../config/connector";


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
const signInStyle = {
    marginTop: '20px'
}


export const SignIn = () => {

    const appContext = useUserContext();
    const { hero, disableNavigation, user, getUser, checkUser, isLoggedOut } = appContext;

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");

    const handleChange1 = (e, value ) => setName({ value });
    const handleChange2 = (e, { value }) => setPicture({ value });

    let alertMessage = '';

    const onFinish = (values) => {
        const username = values.username
            .replace(".com", "")
            .replace(".co", "")
            .replace(".", "");
    
        const user = {
            username: username,
            email: values.username,
            password: values.password,
            is_admin: false
        };
    
        checkUser(user);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Input validation failed:', errorInfo);
    };

    console.log("rendering", JSON.stringify(user));
    
    const view = (user?.username) ? (
        <Navigate to="/" />
        ) : (
            <Row style={signInStyle}>
            <Col span={12} offset={6}>
                <Space direction="vertical">
                    <Title>Sign In</Title>
                    <div>Log into your account to access past orders, and customer information.</div>
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
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input onChange={handleChange1} />
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
                            // name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                            <div>Forgot your password?</div>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Sign In
                            </Button>
                        </Form.Item>
                        <div>
                            Don't have an account? Sign up here.
                        </div>
                    </Form>
                </Space>
            </Col>
        </Row>
      );

    return view; // return

} // SignIn

export default SignIn;
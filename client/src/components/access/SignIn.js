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
    Space,
    message
} from 'antd';


const { Title } = Typography;
const signInStyle = {
    marginTop: '20px'
}


export const SignIn = () => {
      
    const appContext = useUserContext();
    const { user, getUser, checkUser } = appContext;

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // State Object to hold the form values
    const [formData, setFormData] = React.useState({
        username: "", 
        email: "", 
        password: "",
        is_admin: ""
    });

    // const handleChange1 = (e, value ) => setName({ value });
    // const handleChange2 = (e, { value }) => setPicture({ value });


    function handleChange(e) {
        const {name, type, value, checked} = e.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    function onFinish(values) {
        const userinfo = {
            username: values.username,
            email: values.email,
            password: values.password,
            is_admin: false
        };

        checkUser(userinfo);
        // console.log("checkUser(userinfo):", a);
        // if ( a ) {
        //     success();
        // } else {
        //     error();
        // }

    } // onFinished

    const onFinishFailed = (errorInfo) => {
        console.log('Input validation failed:', errorInfo);
    };

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
                            <Input onChange={handleChange} />
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
                            <Input.Password onChange={handleChange} />
                        </Form.Item>

                        <Form.Item
                            valuePropName="checked"
                            name="remember"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                            <div><a href="/forgot">Forgot your password?</a></div>
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
                            Don't have an account? <a href="/signup">Sign up here</a>.
                        </div>
                    </Form>
                </Space>
            </Col>
        </Row>
      );

    return view; // return

} // SignIn

export default SignIn;
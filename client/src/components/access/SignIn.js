import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosClient from "../../config/axios";
import { useNavigate, useLocation } from 'react-router';

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
import axios from "axios";


const { Title } = Typography;
const signInStyle = {
    marginTop: '20px'
}


export const SignIn = (props) => {

    const {forInternalUse=false, action} = props;

    console.log("object keys: ", Object.keys(props));

    let navigate = useNavigate();
    let loc = useLocation();

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

        // setFormData(prevFormData => ({
        //     ...prevFormData,
        //     [name]: type === "checkbox" ? checked : value
        // }));
    }

    function onFinish(values, e) 
    {
        let bodyFormData = new FormData();
        bodyFormData.append('username', values.username);
        bodyFormData.append('password', values.password);

        let err = checkUser(bodyFormData)
        .then(resp => {
            if (forInternalUse === 'false') {
                let l = (loc.search && loc.search.length > 10) ? loc.search.substring(10) : action;
                navigate(l);
            } else {

            }
        })
        .catch(err => {});
        
    } // onFinished

    // function doUserLogin()

    const onFinishFailed = (errorInfo) => {
        console.log('Input validation failed:', errorInfo);
    };

    const fetchValue = () => {
        axiosClient.get("/")
        .then(resp => console.log(JSON.stringify(resp)))
        .catch(e => alert(e));
    };

    const postValue = () => {
        axiosClient.post("/persistMessage?msg=helloworld1")
        .then(resp => console.log(JSON.stringify(resp)))
        .catch(e => alert(e));
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
                        action="http://google.com"
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
                                send
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
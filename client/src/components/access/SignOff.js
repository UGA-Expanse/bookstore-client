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


export const SignOff = (props) => 
{
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

    function handleChange(e) {
        const {name, type, value, checked} = e.target;

        // setFormData(prevFormData => ({
        //     ...prevFormData,
        //     [name]: type === "checkbox" ? checked : value
        // }));
    }

    const view = (
            <Row style={signInStyle}>
            <Col span={12} offset={6}>
                <Space direction="vertical">
                    <Title>Log out</Title>
                    <div>
                        <p>You have been logged out from your account.</p>
                        <p>Log into your account to access past orders, and customer information.</p></div>
                    
                        <div>
                            Want4 to sign back in? <a href="/signin">Sign in here</a>.
                        </div>
                </Space>
            </Col>
        </Row>
      );

    return view; 

} // SignIn

export default SignOff;
import React, { useContext, useState, useEffect } from "react";
import {Context, useUserContext} from "../../config/connector";
import { useNavigate, useLocation } from 'react-router';

import Carousel from "../../components/Carousel";
import CartRow from "../Cart/CartRow";

import logo from "../../logo.svg";

import {
    PageHeader,
    Checkbox,
    Typography,
    Select,
    Button
} from "antd";
const { CheckboxGroup } = Checkbox;
const { Title } = Typography;
const { Option } = Select;

export const Cart = (props) => {
    
    let navigate = useNavigate();
    let location = useLocation();

    const appContext = useUserContext();
    const { user, path, cartitems, getCartItems, postCartItems, locationKey } = appContext;

    useEffect(() => {
        getCartItems()
    }, []);
    
    console.log("USER: ", user);
    
    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    
    const publisherID = 1;

    const cartContainerContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        justifyContent: 'space-around'
};
    
    const cartContainerHeaderStyle = {
        textAlign: 'end',
        borderBottom: '1px solid #F0F0F0'
    };
    
    const cartRows = (cartitems.length > 0) ? 
    cartitems.map(cartitem => <CartRow props={cartitem} />) :<> </>;

    const view = (
        <div className="cart__container">
            {(user?.username) ? <Carousel/> : <span/>}

            <PageHeader
                id="cartPageHeader"
                className="section__page-header"
                title="Shopping Cart"
            />

            <div style={{ display: 'flex', flexDirection: 'row'}}>

                <div style={{ flexGrow: 1 }}>
                    <div style={cartContainerHeaderStyle}>Price</div>
                    <Checkbox.Group style={{ width: '100%' }} >
                        <div id="cartContainerContent" className={"section__container-content"} style={cartContainerContentStyle}>
                            {cartRows}
                        </div>
                    </Checkbox.Group>
                </div>

                <div style={{ width: '300px', textAlign: 'center'}}>
                    <br/>
                    <div>Subtotal (1 item): $19.99</div>
                    <br/>
                    <Button type="primary">
                        Proceed to checkout
                    </Button>
                </div>
            </div>
        </div>
    ); // return

    return view;

}; // Cart

export default Cart;
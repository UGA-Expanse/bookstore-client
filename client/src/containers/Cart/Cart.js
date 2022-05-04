import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';
import {Context, useUserContext} from "../../config/connector";

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
const { Title, Text, Link } = Typography;
const { Option } = Select;

export const Cart = (props) => {

    function loadCart(books, section, search, location) {
        if (!cart) {
            var v = {};
            v.cartId = 0;
            getCart(v);
        }
    }

    const appContext = useUserContext();
    const { user, path, getCart, cartitems, getCartItems, postCartItems, locationKey, cart } = appContext;

    console.log(`Cart.js>start>>cart:${JSON.stringify({cart})}`);

    let navigate = useNavigate();
    let location = useLocation();

    // const [cacheCart, setCacheCart] = useState(cart);



    useEffect(() => {
        if (cart == undefined || Object.keys(cart).length === 0 || cart.cartItems.length == 0) { return; }
        console.log("Cart.js cart first name/count", cart.cartItems[0].book.title, cart.cartItems[0].quantity);
     }, [cart]);

    //  setCacheCart((o) => {
    //      if (cart != undefined && o != cart) {
    //          return cart;
    //      }
    //  })

    const getSubtotalText = (cart) => {
        let itemCount = 0;
        let subtotal = 0;

        if (cart == undefined || Object.keys(cart).length === 0 || cart.cartItems.length == 0) {
            return '';
        }
        
        for (let i = 0; i < cart.cartItems.length; i++) {
            itemCount += ~~cart.cartItems[i].quantity;
            subtotal = Number(cart.cartItems[i].quantity) * Number(cart.cartItems[i].price) + subtotal;
        }

        return `Subtotal (${itemCount} item${(itemCount > 1)? '' : 's'}): $${subtotal.toFixed(2)}`;
    };
    
    const publisherID = 1;

    const cartContainerContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        justifyContent: 'space-around',
        alignItems: 'center'
    };

    const cssTitle = {
        marginLeft: '50px',
        marginTop: '20px'
    }
    
    const cartContainerHeaderStyle = {
        textAlign: 'end',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: "20px"
    };
    console.log(JSON.stringify(cart.cartItems))
    console.log(Object.keys(cart).length);
    
    const cartRows = (cart != undefined && Object.keys(cart).length > 0 && cart.cartItems.length > 0) ? 
                        cart.cartItems.map(cartitem => <CartRow props={cartitem} />) : <></>;

    const view = (
        <div className="cart__container">
            {(user?.username) ? <Carousel/> : <span/>}

            <Title
                id="cartPageHeader"
                style={cssTitle}
                className="section__page-header"
                level={2}>Shopping Cart</Title>
            

            <div style={{ display: 'flex', gap: '10px 30px', flexDirection: 'row', alignContent: 'flex-start'}}>

                <div style={{ flexGrow: 1 }}>
                    <div style={cartContainerHeaderStyle}>Price</div>
                    <Checkbox.Group style={{ width: '100%' }} >
                        <div id="cartContainerContent" className={"section__container-content"} style={cartContainerContentStyle}>
                            {cartRows}
                        </div>
                    </Checkbox.Group>
                </div>

                <div style={{ width: '400px', padding: '10px 30px', margin: '0px 20px', backgroundColor: '#FCFcFc', border: '3px solid #f0f0f0', textAlign: 'left'}}>
                    <br/>
                    <Text>Your order qualifies for FREE Shipping.  
                    Choose this option at checkout.  
                    See details.</Text>
                    <br/>
                    <br/>
                    <div>
                        <Title level={4}>{getSubtotalText(cart)}</Title>
                        </div>
                    <Button type="primary">
                        Proceed to checkout
                    </Button>
                </div>
            </div>
        </div>
    ); // return

    console.log(`Cart.js>end>>cart:------`);

    return view;

}; // Cart

export default Cart;
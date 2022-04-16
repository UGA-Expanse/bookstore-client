import React, { useContext, useState } from "react";
import AppContext from "../../context/AppContext";
import Carousel from "../../components/Carousel";


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
    
    const appContext = useContext(AppContext);
    const { disableNavigation, user, getUser, checkUser } = appContext;
    console.log("USER: ", user);
    console.log("DISABLE_NAVIGATION:", disableNavigation);
    disableNavigation = 'Cart';

    const [name, setName] = useState("");
    const [picture, setPicture] = useState("");
    
    const publisherID = 1;
    const cartItemRowStyle = {
        display: 'flex',
        flexDirection: 'horizontal'
    };
    const cartContainerContentStyle = {
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
        justifyContent: 'space-around'
    };
    const cartItemContentContainer = {
        display: 'flex',
        gap: '20px',
    };
    const cartItemCheckboxCell = {
        width: '50px',
        textAlign: 'center'
    };
    const cartItemImageCell = {
        width: '180px',
        textAlign: 'center'
    };
    const cartItemMetadataCell = {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'

    };
    const cartItemPriceCell = {
        width: '180px',
        textAlign: 'right'
    };
    const cartContainerHeaderStyle = {
        textAlign: 'end',
        borderBottom: '1px solid #F0F0F0'
    };

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
                    <div className="cart-item__row" style={cartItemRowStyle}>
                        <div className="cart-item__checkbox-cell" style={cartItemCheckboxCell}>
                            <Checkbox value="A"/>
                        </div>
                        <div className="cart-item__image-cell" style={cartItemImageCell}>
                            <img alt="example" src="images/cart_image.jpg" width="143" />
                        </div>
                        <div className="cart-item__metadata-cell" style={cartItemMetadataCell}>
                            <Title>Atlas of the Heart: Mapping Meaningful Connection</Title>
                            <div>by Brené Brown</div>
                            <div>Hardcover</div>
                            <div>In Stock</div>
                            <div>
                                <Select defaultValue="1" style={{ width: 120 }}>
                                    <Option value="0">0 (Delete)</Option>
                                    <Option value="1">Qty: 1</Option>
                                    <Option value="2">Qty: 2</Option>
                                    <Option value="3">Qty: 3</Option>
                                    <Option value="4">Qty: 4</Option>
                                    <Option value="5+">Qty: 5+</Option>
                                </Select>
                            </div>
                        </div>
                        <div className="cart-item__price-cell" style={cartItemPriceCell}>
                            $18.34
                        </div>
                    </div>
                <div className="cart-item__row" style={cartItemRowStyle}>
                    <div className="cart-item__checkbox-cell" style={cartItemCheckboxCell}>
                        <Checkbox value="A"/>
                    </div>
                    <div className="cart-item__image-cell" style={cartItemImageCell}>
                        <img alt="example" src="images/cart_image.jpg" width="143" />
                    </div>
                    <div className="cart-item__metadata-cell" style={cartItemMetadataCell}>
                        <Title>Atlas of the Heart: Mapping Meaningful Connection</Title>
                        <div>by Brené Brown</div>
                        <div>Hardcover</div>
                        <div>In Stock</div>
                        <div>
                            <Select defaultValue="1" style={{ width: 120 }}>
                                <Option value="0">0 (Delete)</Option>
                                <Option value="1">Qty: 1</Option>
                                <Option value="2">Qty: 2</Option>
                                <Option value="3">Qty: 3</Option>
                                <Option value="4">Qty: 4</Option>
                                <Option value="5+">Qty: 5+</Option>
                            </Select>
                        </div>
                    </div>
                    <div className="cart-item__price-cell" style={cartItemPriceCell}>
                        $18.34
                    </div>
                </div>
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
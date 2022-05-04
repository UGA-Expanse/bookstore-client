import { useNavigate, useLocation} from 'react-router';
import {Context, useUserContext} from "../../config/connector";

import {
    Button
} from 'antd';

const AddToCart = props => {

    const {bookId} = props;
    const appContext = useUserContext();
    const { cart, addCartItem } = appContext;

    let navigate = useNavigate();
    let location = useLocation();

    const controller = (props) => {
        addCartItem(props)
        .then( resp => navigate("/cart"));
    }

    const handleClick = (e) => {
        const props = new Object();
        let cartId = (cart != undefined) ? cart.id : 0;
        if (cartId == undefined) cartId = 0;
        props.path = `/cart/${cartId}/add/${bookId}`;
        props.cartitem = { bookId: bookId };
        e.stopPropagation();
        controller(props);
    }

    const view = location.pathname.includes("isbn") ? 
    (
        <Button type="primary"  onClick={handleClick}>
            Add to Cart
        </Button>
    ) : (
        <div onClick={handleClick}>
            <span>add to cart</span>
        </div>
    ); // view

    return view;

} // AddToCart

export default AddToCart;
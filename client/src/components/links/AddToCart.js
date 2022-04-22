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
        addCartItem(props);
        //   navigate(path)
    }

    const handleClick = (e) => {
        const props = new Object();
        props.path = `/cart/${cart}/add/${bookId}`;
        props.cartitem = { bookId: bookId };
        controller(props);
        e.preventDefault();
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
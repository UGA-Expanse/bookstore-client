import Picture from "../components/Picture"
import { useNavigate } from 'react-router';
import Price from "../components/Price"

import {
    Card as AntDCard
} from "antd";

import "./Card.scss";

import BuyNow from "../components/links/BuyNow"
import AddToCart from "./links/AddToCart";


export const Card = props => {

    const shipDateAdjuster = () => {
        let date = new Date();
        let currentDay = new Date().getDate();
        let plus4Date = currentDay + 4;
        let thenDate = date.setDate(plus4Date);
        return new Date(thenDate).toString().substring(0,10);
    }

    let navigate = useNavigate();

    const handleCardClick = (e) => {
        navigate(`/bd/isbn/${props.isbn13}`);
    }
    
    const { Meta } = AntDCard;
    let badgeText;
    if (props.quantity === 0) {
        badgeText = "";
    } // if

    const titleSuffix = (props.title.length > 50) ? "\u2026" : "";

    return (
        <AntDCard
            key={props.id}
            onClick={handleCardClick}
            hoverable
            title={props.title.substring(0,50) + titleSuffix}
            bordered={true}
            actions={[<AddToCart bookId={props.id} />, <BuyNow bookId={props.id} />]}
            style={{ width: 200 }}
            cover={<Picture dim="M" img={`https://covers.openlibrary.org/b/isbn/${props.isbn13}-M.jpg?default=true`} />}
        >
            {badgeText && <div className="card--badge">SOLD OUT</div>}
            <Price bookId={props.id} />
            { <p>{`Get it as soon as ${shipDateAdjuster()} using
                FREE Shipping by Expanse`}</p> }
            
        </AntDCard>
    ); // return
}

export default Card;
import Picture from "../components/Picture"
import { useNavigate } from 'react-router';

import {
    Card as AntDCard
} from "antd";

import "./Card.scss";

export const Card = props => {

    console.log("book_id:", props.id);
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
            onClick={handleCardClick}
            hoverable
            title={props.title.substring(0,50) + titleSuffix}
            bordered={true}
            style={{ width: 200 }}
            cover={<Picture dim="M" img={`https://covers.openlibrary.org/b/isbn/${props.isbn13}-M.jpg?default=false`} />}
        >
            {badgeText && <div className="card--badge">SOLD OUT</div>}
            <p><span aria-hidden="true"><span className="a-price-symbol">$</span><span className="a-price-whole">8<span
                className="a-price-decimal">.</span></span><span className="a-price-fraction">99</span></span></p>
            { <p>Get it as soon as Mon, Mar 28
                FREE Shipping by Expanse</p> }
            
        </AntDCard>
    ); // return
}

export default Card;
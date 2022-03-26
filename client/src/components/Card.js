import {
    Card as AntDCard
} from "antd";

import "./Card.scss";

export const Card = props => {
    const { Meta } = AntDCard;
    let badgeText;
    if (props.quantity === 0) {
        badgeText = "";
    } // if

    return (
        <AntDCard
            title={props.title}
            bordered={true}
            style={{ width: 200 }}
            cover={<img alt="example" src={`images/${props.cover}`} />}
        >
            {badgeText && <div className="card--badge">SOLD OUT</div>}
            <p><span aria-hidden="true"><span className="a-price-symbol">$</span><span className="a-price-whole">8<span
                className="a-price-decimal">.</span></span><span className="a-price-fraction">99</span></span></p>
            <p>Get it as soon as Mon, Mar 28
                FREE Shipping by Expanse</p>
        </AntDCard>
    ); // return
}

export default Card;
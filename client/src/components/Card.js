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
            style={{ width: 300 }}
            cover={<img alt="example" src={`images/${props.cover}`} />}
        >
            {badgeText && <div className="card--badge">SOLD OUT</div>}
            <p>Card content</p>
            <p>Card content</p>
        </AntDCard>
    ); // return
}

export default Card;
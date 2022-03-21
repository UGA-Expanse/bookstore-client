import logo from "../../logo.svg";
import {
    Col,
    Row,
    Space
} from 'antd';

import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import data from "../../tmp/data";

export const CatalogPage = props => {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        ); // return
    });

    return (
        <>
            <div className="ant-col ant-col-xs-24 ant-col-sm-24">
                <Carousel />
            </div>
            <Space size={["small",4]} wrap={true}>
                {cards}
            </Space>
        </>
    ); // return
} // export

export default CatalogPage;
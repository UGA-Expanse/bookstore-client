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
            <Row>
                <Col span={24}><Carousel /></Col>
            </Row>
            <Row>
                <Col span={20} offset={2}>
                    <Space size={["large",6]} wrap={true}>
                        {cards}
                    </Space>
                </Col>
            </Row>



            </>

    ); // return
} // export

export default CatalogPage;
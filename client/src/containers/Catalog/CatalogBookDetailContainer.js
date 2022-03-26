import logo from "../../logo.svg";
import {
    Col,
    Row,
    Space,
    Button
} from 'antd';

import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import data from "../../tmp/data_manga";

export const CatalogBookDetailsContainer = props => {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        ); // return
    });

    const containerStyle = {
        display: "flex"
    }

    const rightItemStyle = {
        width: "350px"
    }

    const leftItemStyle = {
        width: "100px",
        minWidth: "100px"

    }

    const contentItemStyle = {
        flexGrow: 1
    }

    return (
            <>
            <Row>
                <Col span={20} offset={2} style={containerStyle}>

                        <div style={rightItemStyle} ><img alt="example" src="images/biggon.jpg" /></div>
                    <div style={contentItemStyle}>
                        <h1>Hunter x Hunter, Vol. 1 Paperback – April 5, 2005</h1>
                        <h3>by Yoshihiro Togashi (Author)</h3>

                        <p>
                        Plucky Gon’s quest to find his dad leads him into a whole world of crazy adventure.
</p><p>
                        Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other people. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.
                    </p><p>
                        Gon might be a country boy, but he has high aspirations. Despite his Aunt Mito's protests, Gon decides to follow in his father's footsteps and become a legendary Hunter. The Hunter hopefuls begin their journey by storm-tossed ship, where Gon meets Leorio and Kurapika, the only other applicants who aren't devastated by bouts of seasickness.
                </p><p>
                        Having survived the terrors of the high seas, Gon and his companions now have to prove their worth in a variety of tests in order to find the elusive Exam Hall. And once they get there, will they ever leave alive...?
            </p><p>
                        <Button type="primary">
                            Add to Cart
                        </Button>
                    </p>
                    </div>
                    <div style={leftItemStyle}><space direction={"vertical"}>
                       </space>
                    </div>



                </Col>
            </Row>



            </>

    ); // return
} // export

export default CatalogBookDetailsContainer;
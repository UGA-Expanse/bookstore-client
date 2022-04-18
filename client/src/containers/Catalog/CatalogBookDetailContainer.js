import {
    Col,
    Row,
    Space,
    Button
} from 'antd';

import Card from "../../components/Card";
import BackToResults from "../../components/links/BackToResults";
import Carousel from "../../components/Carousel";
import data from "../../tmp/data_manga";

export const CatalogBookDetailContainer = props => {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        ); // return
    });

    const containerStyle = {
        display: "flex",
        gap: '50px'
    }

    const rightItemStyle = {
        width: "350px"
    }

    const leftItemStyle = {
        width: "250px !important",

    }

    const contentItemStyle = {
        flexGrow: 1
    }
    

    return (
            <>
                <Row>
                    <BackToResults />
                </Row>
                <Row>
                    <Col span={20} offset={2} style={containerStyle}>
                        <div style={rightItemStyle}>
                            <img alt="example" src="images/biggon.jpg" />
                        </div>
                        <div style={contentItemStyle}>
                            <h1 id={"title"}>
                                <span id={"productTitle"}>Hunter x Hunter, Vol. 1 Paperback – April 5, 2005</span>
                            </h1>
                            <div id="bylineInfo">
                                <span> by </span>
                                <span>Yoshihiro Togashi (Author)</span>
                            </div>
                            <div id="content">

                        <p>
                        Plucky Gon’s quest to find his dad leads him into a whole world of crazy adventure.
                        </p><p>
                        Hunters are a special breed, dedicated to tracking down treasures, magical beasts, and even other people. But such pursuits require a license, and less than one in a hundred thousand can pass the grueling qualification exam. Those who do pass gain access to restricted areas, amazing stores of information, and the right to call themselves Hunters.
                        </p><p>
                        Gon might be a country boy, but he has high aspirations. Despite his Aunt Mito's protests, Gon decides to follow in his father's footsteps and become a legendary Hunter. The Hunter hopefuls begin their journey by storm-tossed ship, where Gon meets Leorio and Kurapika, the only other applicants who aren't devastated by bouts of seasickness.
                        </p><p>
                        Having survived the terrors of the high seas, Gon and his companions now have to prove their worth in a variety of tests in order to find the elusive Exam Hall. And once they get there, will they ever leave alive...?
                        </p></div>
                    </div>
                    <div style={leftItemStyle}>
                        <Button type="primary">
                            Add to Cart
                        </Button>
                    </div>
                </Col>
            </Row>



            </>

    ); // return
} // export

export default CatalogBookDetailContainer;
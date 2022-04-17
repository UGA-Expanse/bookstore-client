import React, { useContext, useState, useEffect } from "react";
import {Context, useUserContext} from "../../config/connector";

import logo from "../../logo.svg";

import {
    Col,
    Row,
    Space
} from 'antd';

import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
// import data from "../../tmp/data";

export const CatalogPage = props => {

    const appContext = useUserContext();
    const { user, books, getBooks } = appContext;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(6);


    useEffect(() => {
        getBooks();
    }, []);

    console.log("Books:", books);

    const cards = books.map(book => {
        return (
            <Card
                key={book.id}
                {...book}
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
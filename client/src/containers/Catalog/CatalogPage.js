import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router';
import {Context, useUserContext} from "../../config/connector";

import logo from "../../logo.svg";

import {
    Col,
    Row,
    Space
} from 'antd';

import Card from "../../components/Card";
import Carousel from "../../components/Carousel";

import "./Catalog.css";

const mainStyle = {
    alignItems: 'flex-end !important'
}


export const CatalogPage = props => {

    console.log("Rendering CatalogPage.js");

    let navigate = useNavigate();

    const appContext = useUserContext();
    const { user, path, books, getBooks, getCategories } = appContext;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(6);

    // useEffect(() => {
    //     getBooks(props.section);
    // }, []);

    const cards = books.map(book => {
        return (
            <Card
                key={book.id}
                {...book}
            />
        ); // return
    });

    const view = (path)? 
        (
            <>
                <Row>
                    <Col span={24}><Carousel /></Col>
                </Row>
                <Row>
                    <Col span={20} offset={2}>
                        <Space style={mainStyle} size={["large",6]} align="end" wrap={true}>
                            {cards}
                        </Space>
                        </Col>
                </Row>
            </>
        ) : <> </>; // return
            console.log("path vs props.section", path, props.section);
            if (path != props.section) {
                getBooks(props.section);
            } else {
                console.log("Skipping data load");
            }
        

    return view;

} // export

export default CatalogPage;
import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';
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
    let location = useLocation();

    const appContext = useUserContext();
    const { user, path, books, getBooks, getCategories } = appContext;

    const search = location.search;
    const section = props.section;

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(6);

    const cards = books?.map(book => {
        return (
            <Card
                key={book.id}
                {...book}
            />
        ); // return
    });

    console.log(`path (${path}) vs props.section (${section})`);
    if (path != props.section) {
        getBooks([section, search]);
    } else {
        console.log("Skipping data load");
    }

    const view = (path) ? 
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
        

    return view;

} // export

export default CatalogPage;
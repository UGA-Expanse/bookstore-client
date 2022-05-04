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

    let navigate = useNavigate();
    let location = useLocation();
    
    function loadBookCatalog(books, section, search, location) {
        if (!books || books.length <= 1) {
            getBooks([section, search, location.key]);
        }
    }

    const appContext = useUserContext();
    const { user, path, books, getBooks, getCategories } = appContext;


    console.log(`<CatalogPage />::container.js>start>>path:${JSON.stringify({})}`);


    console.log("user:", user);
    console.log("user:", user?.username);
    console.log("books:", books);

    const search = location.search;
    const section = props.section;

    // console.log("query:", search);

    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(6);

    const cards = Array.isArray(books) && books.map(book => {
        return (
            <Card
                key={book.id}
                {...book}
            />
        ); // return
    });

    useEffect(() => {
       loadBookCatalog(books, section, search, location.key);
    }, []);

    const view = (true) ? //(Array.isArray(books) && books.length) ? 
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

        console.log(`<CatalogPage />::container.js>end>>path:${JSON.stringify({})}`);

    return view;

} // export

export default CatalogPage;
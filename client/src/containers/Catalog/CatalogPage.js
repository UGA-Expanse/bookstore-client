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
    const { user, path, books, getBooks, getCategories, locationKey } = appContext;

    const search = location.search;
    const section = props.section;

    console.log("query:", search);

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
    const localPath = path;
    console.log("oldKey vs currentkey", locationKey, location.key);
    console.log(`path (${path}) vs props.section (${section})`);
    useEffect(() => {
        getBooks([section, search, location.key])
    }, []);
    // if (locationKey != location.key) {// || section == "/search") { //} && path != props.section && books?.length != 0)) {
        // useEffect(() => {
            // getBooks([section, search, location.key]);
        //   }, [path]);
    // } else {
    //     console.log("Skipping data load");
    // }

    console.log("after getBooks, but before render: books.length", books?.length);

    const view = (Array.isArray(books) && books.length) ? 
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
        
        console.log("after getBooks, just before render");

    return view;

} // export

export default CatalogPage;
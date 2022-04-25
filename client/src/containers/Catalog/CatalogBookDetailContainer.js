import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router';
import {Context, useUserContext} from "../../config/connector";

import logo from "../../logo.svg";

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
import Picture from "../../components/Picture";
import Price from "../../components/Price";
import BookDescriptor from "../../components/BookDescriptor";
import AddToCart from "../../components/links/AddToCart";

export const CatalogBookDetailContainer = props => {

    function loadBookCatalog(props) {
        if (!books || books.length != 1) {
            getBooks([`${location.pathname}`, "", ""]);
        }
    }

    const appContext = useUserContext();
    const { user, path, books, getBooks, getCategories, locationKey, cart } = appContext;

    console.log(`<CatalogBookDetailContainer />::container.js>start>>path:${JSON.stringify({})}`);


    console.log("books:", JSON.stringify(books));
    console.log("USER: ", user);
    console.log("cart: ", cart);

    let navigate = useNavigate();
    let location = useLocation();

    React.useEffect(() => {
        loadBookCatalog([`${location.pathname}`, "", ""]);
    }, []);

    const containerStyle = {
        display: "flex",
        gap: '50px'
    }

    const rightItemStyle = {
        minWidth: "350px"
    }

    const leftItemStyle = {
        width: "250px !important",

    }

    const contentItemStyle = {
        flexGrow: 1
    }

    const contentBlockStyle = {
        marginTop: "30px"
    }


    const view = (books != undefined && books.id) ? (
            <>
                <Row>
                    <BackToResults />
                </Row>
                <Row>
                    <Col span={20} offset={2} style={containerStyle}>
                        <div style={rightItemStyle}>
                            <Picture dim="L" img={`https://covers.openlibrary.org/b/isbn/${books.isbn13}-L.jpg?default=false`} />
                        </div>
                        <div style={contentItemStyle}>
                            <h1 id={"title"}>
                                <span id={"productTitle"}>{books.title}</span>
                            </h1>
                            <div id="bylineInfo">
                                <span> by </span>
                                <span>{books.publisher.publisherName}</span>
                            </div>
                            <div id="content" style={contentBlockStyle}>
                                <BookDescriptor title={books.title} />
                            </div>
                            <div>
                                 <h3>Book details</h3>
                                <span className="rowHeader">Publisher ‏ : ‎ {`${books.publisher.publisherName} (${books.publicationDate})`}</span><br/>
                                <span className="rowHeader">Language ‏ : ‎ {books.language.languageName}</span><br/>
                                <span className="rowHeader">Pages ‏ : ‎ {`${books.numPages} pages`}</span><br/>
                            <span className="rowHeader">ISBN-13 ‏ : ‎ {books.isbn13}</span>
                            </div>
                            <div>
                            <Price bookId={books.id} />
                            </div>
                        </div>
                        <div style={leftItemStyle}>
                            <AddToCart bookId={books.id}/>
                        </div>
                </Col>
            </Row>

            </>

    ) : (<></>); // return

    console.log(`<CatalogBookDetailContainer />::container.js>end>>path:${JSON.stringify({})}`);

    return view;

} // export

export default CatalogBookDetailContainer;
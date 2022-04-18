import React, { useReducer } from "react";
import { createContext } from "react";

import axiosClient from "./axios";
import currencyClient from "./apiCurrency";

// reducer
import Reducer from "./reducer";

// type tags
import {
  GET_CURRENCY,
  GET_USER,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_BOOKS,
  POST_USER,
  POST_CATEGORY,
  POST_PRODUCTS,
  POST_BOOKS,
  SET_PATH
} from "./constants";

// context
const userContext = React.createContext();

function useUserContext() {
  const context = React.useContext(userContext);
  if (context === undefined) {
    throw new Error('userContext must be used within a UserContextProvider')
  }
  return context
}

const Context = props => {
  const initialState = {
    user: null,
    currency: null,
    books: [],
    categories: [],
    path: null
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

  // API Currency
  const getCurrency = async () => {
    const res = await currencyClient.get("");

    dispatch({
      type: GET_CURRENCY,
      payload: res.data
    });
  };

  // POST Methods
  const checkUser = async user => {
      var res = await axiosClient.post("/login", user)
                                 .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));
      
      if (res?.data?.content) {
        localStorage.setItem("user", JSON.stringify(res.data.content));
      }
      
    dispatch({
      type: GET_USER,
      payload: res?.data?.content
    });
  };

  const addUser = async user => {
    const res = await axiosClient.post("/users/add", user);

    localStorage.setItem("user", JSON.stringify(res.data));

    dispatch({
      type: POST_USER,
      payload: res.data
    });
  };
  const addCategory = async category => {
    const res = await axiosClient.post("/categories/add", category);

    dispatch({
      type: POST_CATEGORY,
      payload: res.data
    });
  };
  const addProduct = async product => {
    const res = await axiosClient.post("/products/add", product);

    dispatch({
      type: POST_PRODUCTS,
      payload: res.data
    });
  };
  const addBook = async book => {
    const res = await axiosClient.post("/books/add", book);

    dispatch({
      type: POST_BOOKS,
      payload: res.data
    });
  };

  // GET Methods
  const getUser = async user => {
    const res = await axiosClient.get("/users/" + user.username);
    console.log("GETTING USER");
    if (res.data.password === user.password) {
      localStorage.setItem("user", JSON.stringify(user));
    }

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Predefined collections
  const getCategories = async (props) => {

    const path = "/category/" + props + "/all";
    console.log("path: ", path);
    const res = await axiosClient.get(path)
                .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));

    console.log("res data:", JSON.stringify(res?.data));
    
    dispatch({
      type: GET_CATEGORIES,
      payload: res?.data
    });
  };

  const getProducts = async () => {
    const res = await axiosClient.get("/products/all");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  };

  const getBooks = async (props) => {
    const section = (props && props != 'books') ? `${props}` : "";
    const path = `/book${section}/all`
    console.log("Path: ", path);
    const res = await axiosClient.get(path)
                .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));

    if (res.data) {
      console.log("res data:", JSON.stringify(res?.data));
      dispatch({
        type: GET_BOOKS,
        payload: res?.data
      });

      dispatch({
        type: SET_PATH,
        payload: props
      });
    } 
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        currency: state.currency,
        categories: state.categories,
        products: state.products,
        books: state.books,
        path: state.path,
        addUser,
        addCategory,
        addProduct,
        addBook,
        getUser,
        checkUser,
        getCategories,
        getProducts,
        getBooks,
        getCurrency
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export {
  Context, 
  useUserContext
};
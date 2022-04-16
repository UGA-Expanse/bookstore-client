import React, { useReducer } from "react";

import axiosClient from "./axios";
import currencyClient from "./apiCurrency";

// context
import userContext from "../context/AppContext";

// reducer
import Reducer from "./reducer";

// type tags
import {
  GET_CURRENCY,
  GET_USER,
  GET_CATEGORIES,
  GET_PRODUCTS,
  POST_USER,
  POST_CATEGORY,
  POST_PRODUCTS
} from "./constants";

const Context = props => {
  const initialState = {
    user: null,
    currency: null,
    products: [],
    categories: []
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
      var res = await axiosClient.post("/login", user).catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));
      
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
  const getCategories = async () => {
    const res = await axiosClient.get("/categories/all");

    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };
  const getProducts = async () => {
    const res = await axiosClient.get("/products/all");

    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        currency: state.currency,
        categories: state.categories,
        products: state.products,
        addUser,
        addCategory,
        addProduct,
        getUser,
        checkUser,
        getCategories,
        getProducts,
        getCurrency
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
import React, { useReducer } from "react";
import { createContext } from "react";

import axiosClient from "./axios";
import currencyClient from "./apiCurrency";

// reducer
import Reducer from "./reducer";


import {
  Space,
  message
} from 'antd';

// type tags
import {
  GET_CART,
  GET_CURRENCY,
  GET_USER,
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_BOOKS,
  GET_CARTITEMS,
  POST_USER,
  POST_CATEGORY,
  POST_PRODUCTS,
  POST_BOOKS,
  POST_CARTITEMS,
  POST_CART,
  SET_PATH,
  SET_LOCATION
} from "./constants";

// context
const userContext = React.createContext();

function useUserContext() {
  const context = React.useContext(userContext);
  if (context === undefined) {
    alert("usercontext is null so not loaded");
    throw new Error('userContext must be used within a UserContextProvider')
  }
  return context
}

const Context = props => {
  const initialState = {
    user: null,
    currency: null,
    books: [],
    cartitems: [],
    categories: [],
    path: null,
    location: null,
    cart: {}
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

  const success = () => {
    message.success('Successful login');
};

const error = () => {
    message.error('Login attempt failed');
};

  // POST Methods
  const checkUser = async user => {
      var res = await axiosClient.post("/login", user)
                                 .catch(e => {
                                   console.log((e.response)? JSON.stringify(e.response.data) : e.message);
                                   error();
                                 });
      
      if (res?.data?.content) {
        localStorage.setItem("user", JSON.stringify(res.data.content));
      }
      
    dispatch({
      type: GET_USER,
      payload: res?.data?.content
    });
  };

  const removeUser = async user => {
    var res = await axiosClient.post("/logout", user)
                    .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));

    dispatch({
      type: GET_USER,
      payload: undefined
    });
  }

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
    const res = await axiosClient.post("/products/add", book);

    dispatch({
      type: POST_BOOKS,
      payload: res.data
    });
  };

  const addCartItem = async (props) => {

      console.log("addtocart:", JSON.stringify(props));
      const {path, cartitem} = props;
      

      const res = await axiosClient.post(path, cartitem)
                .catch(e => console.log(
                  (e.response) ? 
                    JSON.stringify(e.response.data) : 
                    e.message)
                );

                console.log("res:", JSON.stringify(res));

                
  if (res?.data) {
      localStorage.setItem("cart", JSON.stringify(res.data.content));

      dispatch({
          type: POST_CARTITEMS,
          payload: res.data.content.cartItems
      });

      dispatch({
        type: POST_CART,
        payload: res.data.content
    });
  };
}

const updateCartItem = (props) => {

  const {path} = props;

  axiosClient.get(path)
      .then( (res) => {
          if (res?.data) {
            localStorage.setItem("cart", JSON.stringify(res.data.content));
            console.log("Connector.js cart first name/count", res.data.content.cartItems[0].book.title, res.data.content.cartItems[0].quantity);
            dispatch({
                type: POST_CART,
                payload: res.data.content
            });
          };  
      })
      .catch(e => console.log(
              (e.response) ? 
                JSON.stringify(e.response.data) : 
                e.message));
}

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

  const getCartItems= async (props) => {
    const {cart} = props;

    console.log(`getCartItems URL: /cart/${cart}/all`);
    const res = await axiosClient.get(`/cart/${cart}/all`);

    dispatch({
      type: GET_CARTITEMS,
      payload: res.data
    });
  };

  const getBooks = async (props) => {

    const [section, search, locationKey] = props;
    console.log("section: ", section, "search:", search, "locationKey:", locationKey);

    const suffix = (section == "/search" && search)? search : (section.indexOf('bd') != -1) ? '' : '/all';
    const _section = (section && section != '/books') ? `${section}` : "";
    
    const path = `/book${_section}${suffix}`
    console.log("Path: ", path);
    const res = await axiosClient.get(path)
                .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));

    console.log("data loaded!!! path:", path, "section", _section);  
    console.log("res", JSON.stringify(res))

    if (res?.data) {
      dispatch({
        type: GET_BOOKS,
        payload: res?.data
      });

      // dispatch({
      //   type: SET_PATH,
      //   payload: section
      // });

      // dispatch({
      //   type: SET_LOCATION,
      //   payload: locationKey
      // });
    } 
  };

  const getCart = props => {
    const localCart = JSON.parse(localStorage.getItem("cart"));

    if (localCart && localCart.id > 0) {
  
      dispatch({
        type: GET_CART,
        payload: localCart
      });
      return;
    }

    const {cartid} = props;

    axiosClient.get(`/cart/${cartid}`)
        .then(res => {
          if (res.data.content) {
            localStorage.setItem("cart", JSON.stringify(res.data.content));
            dispatch({
              type: GET_CART,
              payload: res.data.content
            });
          } else {
            throw new Error("problem getting cart data");
          }
        })
        .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));
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
        locationKey: state.locationKey,
        cartitems: state.cartitems,
        cart: state.cart,
        addUser,
        removeUser,
        addCategory,
        addProduct,
        addCartItem,
        addBook,
        getUser,
        checkUser,
        getCategories,
        getProducts,
        getCartItems,
        getBooks,
        getCurrency,
        getCart,
        updateCartItem
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
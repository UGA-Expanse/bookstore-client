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
  SET_LOCATION,
  LOGIN_URL
} from "./constants";
import Cookies from "js-cookie";

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
  const checkUser = async bodyFormData => {
      
    const res = await axiosClient({
          method: "post",
          url: "/login",
          data: bodyFormData,
          headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("return from axios:", res);
        if (res.data?.access_token) localStorage.setItem("access_token", JSON.stringify(res.data.access_token));
        if (res.data.refresh_token) localStorage.setItem("refresh_token", JSON.stringify(res.data.refresh_token));
        Cookies.set('access_token', res.data.access_token);
        Cookies.set('refresh_token', res.data.refresh_token);

        if (res.data?.content) 
        {
          let userContent = JSON.parse(res.data.content);
          console.log("res.data.content::", userContent);
          localStorage.setItem("user", JSON.stringify(userContent));
          
          dispatch({
              type: GET_USER,
              payload: userContent 
          });
        }
    })
          .catch(e => {
              console.log((e.response)? JSON.stringify(e.response.data) : e.message);
              error();
              throw e;
          });
  };

  const removeUser = async (user, cart) => 
  {
    const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken(); // JSON.parse(localStorage.getItem("access_token"));
    const authorizationHeader = new Object();
    if (authorizationToken != null)
      authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);

      let expanseRequest = new Object();
      expanseRequest.user = user;
      expanseRequest.cart = cart;
      expanseRequest.action = "logout";

      await axiosClient.post("/logout", expanseRequest, { headers: authorizationHeader })
      .catch(e => console.log((e.response)? JSON.stringify(e.response.data) : e.message));

      console.log("clearing localstorage");
      Cookies.remove('access_token');
      Cookies.remove('refresh_token');
      sessionStorage.clear();
      localStorage.clear();
      dispatch({
          type: GET_USER,
          payload: undefined
      });

          
  }

  const addUser = async user => {
    const res = await axiosClient.post("/users/add", user);

    sessionStorage.setItem("user", JSON.stringify(res.data));

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

    const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken();
    const authorizationHeader = new Object();
    if (authorizationToken != null)
      authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);

      console.log("addtocart:", JSON.stringify(props));
      const {path, cartitem} = props;
      
      let query = (sessionStorage.getItem("cart")) ? "?session=".concat(JSON.parse(sessionStorage.getItem("cart")).cartSessionId) : "";
      const fullPath = path.concat(query);
      
      const res = await axiosClient.post(fullPath, cartitem, { headers: authorizationHeader })
      .then(res => {
            console.log("res:", JSON.stringify(res));
                    
            if (res?.data) {
              sessionStorage.setItem("cart", JSON.stringify(res.data.content));
          
                dispatch({
                    type: POST_CARTITEMS,
                    payload: res.data.content.cartItems
                });
          
                dispatch({
                  type: POST_CART,
                  payload: res.data.content
              });
            };        
      })
                .catch(e => console.log(
                  (e.response) ? 
                    JSON.stringify(e.response.data) : 
                    e.message)
                );

                
}

const updateCartItem = async (props) => {
  const {path} = props;

  const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken();
  const authorizationHeader = new Object();
  if (authorizationToken != null)
    authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);

  let res = await axiosClient.get(path, { headers : authorizationHeader })
  .then( (res) => {
          if (res?.data) {
            sessionStorage.setItem("cart", JSON.stringify(res.data.content));
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
      sessionStorage.setItem("user", JSON.stringify(user));
    }

    dispatch({
      type: GET_USER,
      payload: res.data
    });
  };

  // Predefined collections
  const getCategories = async (props) => {

    // const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken(); // JSON.parse(localStorage.getItem("access_token"));
    // const authorizationHeader = new Object();
    // authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);

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
    const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken(); // JSON.parse(localStorage.getItem("access_token"));
    const authorizationHeader = new Object();
    authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);
    let retVal = null;
    
    const res = await axiosClient.get("/inventory/all", { "headers" : authorizationHeader })
            .then(r => {
                console.log("then");
                dispatch({
                  type: GET_PRODUCTS,
                  payload: res.data.content
                });

                retVal = res.data.content;
            })
            .catch(e => {
              // console.log(e);
              // console.log((e.response)? JSON.stringify(e.response?.data) : e.message);
                retVal = null;
            });
    console.log("RES:", res);
    return retVal;
    
  };

  const getCartItems= async (props) => {
    // const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken(); // JSON.parse(localStorage.getItem("access_token"));
    // const authorizationHeader = new Object();
    // if (authorizationToken != null)
    // authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);
    const {cart} = props;

    console.log(`getCartItems URL: /cart/${cart}/all`);
    const res = await axiosClient.get(`/cart/${cart}/all`);

    dispatch({
      type: GET_CARTITEMS,
      payload: res.data
    });
  };

  const getBooks = async (props) => {

    // const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken(); // JSON.parse(localStorage.getItem("access_token"));
    // const authorizationHeader = new Object();
    // authorizationHeader.Authorization = "Bearer ".concat(authorizationToken);

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

  const getCart = props => 
  {
      const {cartid} = props;
      const localCart = JSON.parse(sessionStorage.getItem("cart"));

      console.log("getCart", cartid);

      if (localCart && localCart.id > 0) {
    
        dispatch({
          type: GET_CART,
          payload: localCart
        });
        
        return;
      }

      axiosClient.post(`/cart/create`)
          .then(res => {
            if (res.data.content) {
              sessionStorage.setItem("cart", JSON.stringify(res.data.content));
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


const requestHandler = (request) => {
  // console.log("adding header to request");
  // const authorizationToken = (isAuthenticated()) ? getAccessToken() : getRefreshToken(); // JSON.parse(localStorage.getItem("access_token"));
  // request.headers.Authorization = `Bearer ${authorizationToken}`;
  return request;
};
  
axiosClient.interceptors.request.use(
    (request) => requestHandler(request)
);
    
const getAccessToken = () => Cookies.get('access_token');
const getRefreshToken = () => Cookies.get('refresh_token');
const isAuthenticated = () => !!getAccessToken();
const authenticate = async () => {
  if (getRefreshToken()) {
    try {
      const tokens = await refreshTokens() // call an API, returns tokens

      const expires = (tokens.expires_in || 60 * 60) * 1000
      const inOneHour = new Date(new Date().getTime() + expires)

      // you will have the exact same setters in your Login page/app too
      Cookies.set('access_token', tokens.access_token, { expires: inOneHour })
      Cookies.set('refresh_token', tokens.refresh_token)

      return true
    } catch (error) {
      redirectToLogin()
      return false
    }
  }

  redirectToLogin()
  return false
}

const redirectToLogin = () => {
  window.location.replace(
    `${LOGIN_URL}?next=${window.location.href}`
  )
  // or history.push('/login') if your Login page is inside the same app
}

const refreshTokens = async () => {
    const authorizationHeader = new Object();
    authorizationHeader.Authorization = "Bearer ".concat(getRefreshToken());
    const res = await axiosClient.get("/token/refresh", { "headers" : authorizationHeader })
    .catch(e => {
      console.log((e.response)? JSON.stringify(e.response.data) : e.message);
      return null;
  });
  return res.data;
};

// const AuthenticatedRoute = ({
//   component: Component,
//   exact,
//   path,
// }) => (
//   <Route
//     exact={exact}
//     path={path}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <AuthenticateBeforeRender render={() => <Component {...props} />} />
//       )
//     }
//   />
// )

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
        updateCartItem,
        isAuthenticated
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
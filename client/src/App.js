import {
    useEffect,
    useState,
} from "react";
import { ReactSession } from 'react-client-session';
import {
    QueryClient,
    QueryClientProvider
} from 'react-query';
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import {Context as ContextConnector} from "./config/connector";
import Cookies from 'js-cookie';

// Custom defined contexts
import LogoutContext from "./context/LogoutContext";
// Custom defined containers
import TopMost from "./containers/TopMost/Container";
import Inventory from "./containers/Inventory/InventoryContainer";
import Catalog from "./containers/Catalog/CatalogPage";
import BookDetail from "./containers/Catalog/CatalogBookDetailContainer";
import SignIn from "./components/access/SignIn";
import SignUp from "./components/access/SignUp";
import SignOff from "./components/access/SignOff";
import MerchantViewContainer from "./containers/MerchantView/MerchantVIewContainer";
import Cart from "./containers/Cart/Cart";
import AffliatesView from "./containers/Affiliates/AffliatesContainer";

import logo from './logo.svg';
import './App.css';
import { VerifyEmailAddress } from "./components/VerifyEmailAddress";
import ForgotPassword from "./components/access/ForgotPassword";
import axios from "axios";

// <Navigate exact from="/login" to="/catalog" />

function App(){
    const queryClient = new QueryClient();
    const [isLoggedOut, setIsLoggedOut] = useState( true );
    const [disableNavigation, setDisableNavigation] = useState( false );
    
    
    ReactSession.setStoreType("cookie");
    sessionStorage.setItem("my-key", "123");
    
    // const username = ReactSession.get("username");
      
    // if (isLoggedOut) {
    return (
        <ContextConnector>
            <QueryClientProvider client={queryClient}>
                <LogoutContext.Provider value={{ isLoggedOut }}>
                    <Router>
                        {/* <AppContext.Provider value={{ disableNavigation }}> */}
                            <TopMost>
                                <Routes>
                                    <Route exact path="/books" element={<Catalog section="/books" />} />
                                    <Route exact path="/" element={<Catalog section="/books" />} />
                                    <Route exact path="/category/new-releases" element={<Catalog section="/newrel" />} />
                                    <Route exact path="/category/foreign" element={<Catalog section="/category/foreign" />} />
                                    <Route exact path="/category/comics" element={<Catalog section="/category/comics" />} />
                                    <Route exact path="/verify" element={<VerifyEmailAddress />} />
                                    <Route exact path="/reset" element={<ForgotPassword />} />
                                    <Route path="/signin" element={<SignIn action="/customer" forInternalUse="false" />} />
                                    <Route path="/signoff" element={<SignOff />} />
                                    <Route exact path="/signup" element={<SignUp />} />
                                    <Route exact path="/inventory" element={<Inventory />} />
                                    <Route exact path="/cart" element={<Cart />} />
                                    <Route exact path="/search" element={<Catalog section="/search" />} />
                                    <Route path="/merchant" element={ <MerchantViewContainer /> } />
                                    <Route path="/affiliates" element={ <AffliatesView /> } />
                                    <Route path="/bd/isbn/:isbn13" element={<BookDetail />} />
                                    
                                </Routes>
                            </TopMost>
                        {/* </AppContext.Provider> */}
                    </Router>
                </LogoutContext.Provider>
            </QueryClientProvider>
        </ContextConnector>
    );
    // } // if (isLoggedOut)
    // else {
    //     return (
    //         <QueryClientProvider client={queryClient}>
    //             <LogoutContext.Provider value={{isLoggedOut}}>
    //                 <div className="App">
    //                     <header className="App-header">
    //                         <h1>Logged In</h1>
    //                     </header>
    //                 </div>
    //             </LogoutContext.Provider>
    //         </QueryClientProvider>
    //     )
    // } // else (isLoggedOut)
} // App

export default App;

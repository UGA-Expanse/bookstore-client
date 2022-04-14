import {
    useEffect,
    useState
} from "react";
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

// Custom defined contexts
import LogoutContext from "./context/LogoutContext";
import AppContext from "./context/AppContext";
// Custom defined containers
import TopMost from "./containers/TopMost/Container";
import Inventory from "./containers/Inventory/InventoryContainer";
import Catalog from "./containers/Catalog/CatalogPage";
import CatalogD from "./containers/Catalog/CatalogBookDetailContainer";
import SignIn from "./components/access/SignIn";
import SignUp from "./components/access/SignUp";
import MerchantViewContainer from "./containers/MerchantView/MerchantVIewContainer";
import Cart from "./containers/Cart/Cart";

import logo from './logo.svg';
import './App.css';
import { VerifyEmailAddress } from "./components/VerifyEmailAddress";
import ForgotPassword from "./components/access/ForgotPassword";

// <Navigate exact from="/login" to="/catalog" />

function App()
{
    const queryClient = new QueryClient();
    const [isLoggedOut, setIsLoggedOut] = useState( true );
    const [disableNavigation, setDisableNavigation] = useState( false );

    if (isLoggedOut) {
        return (
            <QueryClientProvider client={queryClient}>
                <LogoutContext.Provider value={{ isLoggedOut }}>
                    <Router>
                        <AppContext.Provider value={{ disableNavigation }}>
                            <TopMost>
                                <Routes>
                                    <Route exact path="/verify" element={<VerifyEmailAddress />} />
                                    <Route exact path="/reset" element={<ForgotPassword />} />
                                    <Route exact path="/signin" element={<SignIn />} />
                                    <Route exact path="/signup" element={<SignUp />} />
                                    <Route exact path="/" element={<Catalog />} />
                                    <Route exact path="/book" element={<CatalogD />} />
                                    <Route exact path="/inventory" element={<Inventory />} />
                                    <Route exact path="/cart" element={<Cart />} />
                                    <Route path="/merchant" element={ <MerchantViewContainer /> } />
                                </Routes>
                            </TopMost>
                        </AppContext.Provider>
                    </Router>
                </LogoutContext.Provider>
            </QueryClientProvider>
        );
    } // if (isLoggedOut)
    else {
        return (
            <QueryClientProvider client={queryClient}>
                <LogoutContext.Provider value={{isLoggedOut}}>
                    <div className="App">
                        <header className="App-header">
                            <h1>Logged In</h1>
                        </header>
                    </div>
                </LogoutContext.Provider>
            </QueryClientProvider>
        )
    } // else (isLoggedOut)
} // App

export default App;

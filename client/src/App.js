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
    Routes,
} from "react-router-dom";

// Custom defined contexts
import LogoutContext from "./context/LogoutContext";
import AppContext from "./context/AppContext";
// Custom defined containers
import TopMost from "./containers/TopMost/Container";
import Inventory from "./containers/Inventory/InventoryPage";
import Catalog from "./containers/Catalog/CatalogPage";

import logo from './logo.svg';
import './App.css';

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
                                    <Route exact path="/catalog" element={<Catalog />} />
                                    <Route exact path="/inventory" element={<Inventory />} />
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

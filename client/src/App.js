import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';
import LogoutContext from "./context/LogoutContext";

import logo from './logo.svg';
import './App.css';

function App()
{
    const queryClient = new QueryClient();
    const [isLoggedOut, setIsLoggedOut] = useState( true );

    if (isLoggedOut) {
        return (
            <QueryClientProvider client={queryClient}>
                <LogoutContext.Provider value={{isLoggedOut}}>
                    <div className="App">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <p>
                                Edit <code>src/App.js</code> and save to reload.
                            </p>
                            <a
                                className="App-link"
                                href="https://reactjs.org"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Learn React
                            </a>
                        </header>
                    </div>
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

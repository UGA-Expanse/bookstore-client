import { createContext } from "react";

const AppContext = createContext({
    disableNavigation: true,
    isLoggedOut: undefined

});

export default AppContext;
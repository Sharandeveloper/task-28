// context <API></ >
// useContext hooks


// Context(warehouse)
// provider
// consumer / (useContext())

import react from "react";

const Appcontext = React.createContext();

// we need to create a provider fun
const Appprovider = ({children}) => {
    return <appcontext.provider value="guvi">{children}</appcontext.provider>
};

// global custom hooks
const useglobalcontext = ()  => {
     return usecontext (appcontext);
} 


export { appcontext,Appprovider,useglobalcontext };





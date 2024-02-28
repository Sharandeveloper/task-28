import App from "./App";
 import reportwebvitals from "./reportwebvitals";
 import {broswerrouter as router } from 
 "react-router-dom";
 import { Appprovider } from "./context";
 const root = react.DOM.createroot(document.getElementById("root"));

 root.render(
    <react.stricmode>
        <Appprovider>
            <router>
                < app />
            </router>
        </Appprovider>
    </react.stricmode>
 );

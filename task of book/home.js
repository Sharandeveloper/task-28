import react, { useContext } from "react";
 //import { appcontext } from "./context";
import { useglobalcontext } from "./context";

const home=() => {
   // const name = usecontext(Appcontext);
    const name = useglobalcontext();
    return (
     <>
       <div>my home page</div>
       <p>{name}</p>

    </>
    );
};

export default home;
import React, { useEffect } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import signOut from "../appLogic/fetching/signOut";
import reValidateToken from "../appLogic/fetching/reValidateToken";
import "../css/auth.css";

function AuthContainer(props){
    var noUserAuth = (
        <div className="outerContainer">
            <h3>Authentication</h3>
            <div className="innerContainer">
            <SignIn
             fSet={props.fSet}
            />
            <SignUp
             fSet={props.fSet}
             />
            </div>
        </div>);
    var userAuth = (
        <div className="outerContainer">
            <h3>Hello {props.user ? props.user.name : "error"}</h3>
            {/* Log out capiblitys should be added */}
            <h6>Your current API key is {props.user ? props.user.jwtApiKey : "error"}</h6>
            <button onClick={reValidateToken}>Revalidate Api Key</button>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
    return(props.user ? userAuth : noUserAuth);
}

export default AuthContainer;
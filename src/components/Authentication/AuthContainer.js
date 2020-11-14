import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import signOut from "../../appLogic/fetching/signOut";
import reValidateToken from "../../appLogic/fetching/reValidateToken";
import "../../css/auth.css";
import sData from '../../appLogic/data';

function AuthContainer(){
    const user = sData.uSet.user;
    
    var noUserAuth = (
        <div className="outerContainer">
            <h3>Authentication</h3>
            <div className="innerContainer">
            <SignIn
            />
            <SignUp
             />
            </div>
        </div>);
    var userAuth = (
        <div className="outerContainer">
            <h3>Hello {user ? user.name : "error"}</h3>
            {/* Log out capiblitys should be added */}
            <h6>Your current API key is {user ? user.jwtApiKey : "error"}</h6>
            <button onClick={reValidateToken}>Revalidate Api Key</button>
            <button onClick={signOut}>Sign out</button>
        </div>
    );
    return(user ? userAuth : noUserAuth);
}

export default AuthContainer;
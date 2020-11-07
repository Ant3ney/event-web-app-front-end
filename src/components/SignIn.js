import React, { useState } from "react";
import "../css/auth.css";
import handleSignIn from "../appLogic/fetching/signIn";

function SignIn(props){
    const [nameValue, setNameValue] = useState("not set");
    const [passwordValue, setPasswordValue] = useState("not set");

    return(
        <form onSubmit={handleSubmit}>
            <h3>Sign in</h3>
            <label>Username</label>
            <input type="text" name="name" onChange={(event) => {formChange(event, "nameChange");}}/>
            <label>Password</label>
            <input type="password" name="password" onChange={(event) => {formChange(event, "passwordChange");}}/>
            <button>Submit</button>
        </form>
    );

    function formChange(event, type){
        if(type === "nameChange"){
            setNameValue(event.target.value);
        }
        else if(type === "passwordChange"){
            setPasswordValue(event.target.value);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        var data = {
            name: nameValue,
            password: passwordValue,
            userType: "user"
        }

        data = JSON.stringify(data);

        handleSignIn(data);
    }
}

export default SignIn;
import React, { useState, useEffect } from "react";

const WithFunctions = (Component) => (props) => {
    const [auth, setAuth] = useState();

    const handleSingIn = () => {
        localStorage.setItem("name", "Alex");
        console.log("click signIn");
    };
    const handleLogOut = () => {
        localStorage.removeItem("name");
        console.log("click LogOut");
    };
    useEffect(() => {
        if (localStorage.getItem("name", "Alex")) {
            setAuth(true);
            console.log("LocalStorage auth");
        } else {
            setAuth(false);
            localStorage.removeItem("name");
            console.log("LocalStorage not");
        }
    }, [auth]);

    return (
        <Component
            onLogin={handleSingIn}
            onLogOut={handleLogOut}
            isAuth={auth}
            {...props}
        />
    );
};

export default WithFunctions;

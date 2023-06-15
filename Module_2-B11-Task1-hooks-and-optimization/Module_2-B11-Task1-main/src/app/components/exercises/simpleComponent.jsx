import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return isAuth ? (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log out
        </button>
    ) : (
        <button className="btn btn-primary" onClick={onLogin}>
            Singn In
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};
export default SimpleComponent;

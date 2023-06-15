import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render bnt");
    });
    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            OUTLOG
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

function areEqual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemoizedLogOutBtn = React.memo(LogOutButton, areEqual);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                BTN STATE
            </button>
            <MemoizedLogOutBtn onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;

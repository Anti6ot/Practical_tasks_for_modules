import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef(0);
    const [otherState, setOtherState] = useState("false");
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <p>prev State: {prevState.current}</p>
            <p>current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                toggle
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

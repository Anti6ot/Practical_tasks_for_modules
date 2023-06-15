import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current);
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                ref={inputRef}
                className="form-control"
                id="email"
            />
            <button className="btn btn-primary" onClick={handleClick}>
                button
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                button
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;

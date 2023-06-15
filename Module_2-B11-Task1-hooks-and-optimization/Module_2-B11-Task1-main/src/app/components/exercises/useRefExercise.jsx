import React, { useState, useRef, useEffect } from "react";
// import React from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const divRef = useRef();
    const [state, setState] = useState("Блок");
    const width = 60 + "px";
    const height = 40 + "px";

    const handleChange = () => {
        const file = divRef.current;
        if (state !== "text") {
            file.style.height = height;
            file.style.width = width;
        } else {
            file.style.height = 150 + "px";
            file.style.width = 80 + "px";
        }
    };
    useEffect(() => {
        handleChange();
    }, [state]);
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: height,
                    width: width,
                    color: "white"
                }}
                ref={divRef}
            >
                <small>{state}</small>
            </div>
            <button
                className="btn btn-primary mt-2"
                onClick={() => {
                    setState(state !== "Блок" ? "Блок" : "text");
                }}
            >
                изменить
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

import { React, useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};
const runFactorial = (n) => {
    console.log("runFactorial");
    return factorial(n);
};
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    useEffect(() => {
        console.log("render");
    });

    const colorBtn = otherState ? "primary" : "secondary";
    const fact = useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>value: {value}</p>
                <p>factorial: {fact}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    increment
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn btn-" + colorBtn}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;

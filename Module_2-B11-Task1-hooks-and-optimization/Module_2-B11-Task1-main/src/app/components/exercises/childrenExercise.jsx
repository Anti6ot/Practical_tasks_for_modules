import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
const ReactChildrenComponent = ({ children }) => {
    let num = 1;
    return React.Children.map(children, (child) => {
        const count = {
            ...child.props,
            value: num++
        };
        console.log("count", count);
        return React.cloneElement(child, count);
    });
};
ReactChildrenComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ReactChildrenComponent>
                <Component />
                <Component />
                <Component />
            </ReactChildrenComponent>
        </CollapseWrapper>
    );
};

const Component = (value) => {
    return <div>Компонент списка {value.value}</div>;
};

export default ChildrenExercise;

import React from 'react';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return <li key={igKey}>{igKey} - {props.ingredients[igKey]}</li>
        });

    return (
        <>
            <h3>Your order</h3>
            <p>Here is your burger with:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </>
    );
};

export default orderSummary;
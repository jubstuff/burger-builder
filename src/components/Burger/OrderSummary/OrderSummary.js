import React from 'react';

import Button from '../../UI/Button/Button';

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
            <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
        </>
    );
};

export default orderSummary;
import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.module.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
]

const buildControls = (props) => {

    return <div className={classes.BuildControls}>
        {controls.map((ctrl) => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)} />
        })}
    </div>
};

export default buildControls; 
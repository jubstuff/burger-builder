import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.module.css";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current price: <strong>{props.currentPrice.toFixed(2)}</strong>
      </p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
      <button
        disabled={!props.purchasable}
        onClick={props.ordered}
        className={classes.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;

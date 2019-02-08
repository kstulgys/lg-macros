import React, { useState, useEffect } from "react";
import { FormCheckbox, FormInput } from "shards-react";
import Store from "../store";

export default function PersonActivity() {
  const { state, setState } = Store.useStore();

  const onStepsChange = val =>
    state.stepsValue === val
      ? setState(state => {
          state.stepsValue = 0;
        })
      : setState(state => {
          state.stepsValue = val;
        });

  return (
    <>
      <h5 className="font-weight-bold">Steps</h5>
      <FormCheckbox
        checked={state.stepsValue === 0}
        onChange={() => onStepsChange(0)}
      >{`Steps < 6, 000`}</FormCheckbox>
      <FormCheckbox
        checked={state.stepsValue === 0.5}
        onChange={() => onStepsChange(0.5)}
      >{`6, 000 < Steps < 7, 500`}</FormCheckbox>
      <FormCheckbox
        checked={state.stepsValue === 1}
        onChange={() => onStepsChange(1)}
      >{`7, 500 < Steps < 8, 750`}</FormCheckbox>
      <FormCheckbox
        checked={state.stepsValue === 1.5}
        onChange={() => onStepsChange(1.5)}
      >{`8, 750 < Steps < 10, 000`}</FormCheckbox>
      <FormCheckbox
        checked={state.stepsValue === 2}
        onChange={() => onStepsChange(2)}
      >{`10, 000 < Steps < 11, 250`}</FormCheckbox>
      <FormCheckbox
        checked={state.stepsValue === 2.5}
        onChange={() => onStepsChange(2.5)}
      >{`11, 250 < Steps < 12, 500`}</FormCheckbox>
      <FormCheckbox
        checked={state.stepsValue === 3}
        onChange={() => onStepsChange(3)}
      >{`Steps > 12, 500`}</FormCheckbox>
    </>
  );
}

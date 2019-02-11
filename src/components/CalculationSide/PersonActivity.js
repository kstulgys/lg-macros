import React, { useState, useEffect } from "react"
import { FormRadio } from "shards-react"
import Store from "../../store"

export default function PersonActivity() {
  const { state, setState } = Store.useStore()

  const onStepsChange = val =>
    state.stepsValue === val
      ? setState(state => {
          state.stepsValue = 0
        })
      : setState(state => {
          state.stepsValue = val
        })

  return (
    <>
      <h5 className="font-weight-bold">Steps</h5>
      <FormRadio
        checked={state.stepsValue === 0}
        onChange={() => onStepsChange(0)}>{`Steps < 6k`}</FormRadio>
      <FormRadio
        checked={state.stepsValue === 0.5}
        onChange={() => onStepsChange(0.5)}>{`6k < Steps < 7.5k`}</FormRadio>
      <FormRadio
        checked={state.stepsValue === 1}
        onChange={() => onStepsChange(1)}>{`7.5k < Steps < 8.75k`}</FormRadio>
      <FormRadio
        checked={state.stepsValue === 1.5}
        onChange={() => onStepsChange(1.5)}>{`8.75k < Steps < 10k`}</FormRadio>
      <FormRadio
        checked={state.stepsValue === 2}
        onChange={() => onStepsChange(2)}>{`10k < Steps < 11.25k`}</FormRadio>
      <FormRadio
        checked={state.stepsValue === 2.5}
        onChange={() =>
          onStepsChange(2.5)
        }>{`11.25k < Steps < 12.5k`}</FormRadio>
      <FormRadio
        checked={state.stepsValue === 3}
        onChange={() => onStepsChange(3)}>{`Steps > 12.5`}</FormRadio>
    </>
  )
}

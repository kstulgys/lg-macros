import React, { useState, useEffect } from "react"
import { FormRadio } from "shards-react"
import Store from "../../store"
import ModifierSlider from "./ModifierSlider"

export default function PersonActivity() {
  const { state, setState } = Store.useStore()

  const onStepsChange = val => {
    const value = parseFloat(val)

    if (value <= 6000) {
      setState(state => {
        state.stepsValue = 0
        state.steps = value
      })
      return
    }
    if (value > 6000 && value <= 7500) {
      setState(state => {
        state.stepsValue = 0.5
        state.steps = value
      })
      return
    }
    if (value > 7500 && value <= 8750) {
      setState(state => {
        state.stepsValue = 1
        state.steps = value
      })
      return
    }
    if (value > 8750 && value <= 10000) {
      setState(state => {
        state.stepsValue = 1.5
        state.steps = value
      })
      return
    }
    if (value > 10000 && value <= 11250) {
      setState(state => {
        state.stepsValue = 2
        state.steps = value
      })
      return
    }
    if (value > 11250 && value <= 12500) {
      setState(state => {
        state.stepsValue = 2.5
        state.steps = value
      })
      return
    }
    if (value > 12500 && value <= 13750) {
      setState(state => {
        state.stepsValue = 3
        state.steps = value
      })
      return
    }
    if (value > 13750 && value <= 15000) {
      setState(state => {
        state.stepsValue = 3.5
        state.steps = value
      })
      return
    }
    if (value > 15000 && value <= 16250) {
      setState(state => {
        state.stepsValue = 4
        state.steps = value
      })
      return
    }
    if (value > 16250 && value <= 17500) {
      setState(state => {
        state.stepsValue = 4.5
        state.steps = value
      })
      return
    }
    if (value > 17500 && value <= 18750) {
      setState(state => {
        state.stepsValue = 5
        state.steps = value
      })
      return
    }
    if (value > 18750) {
      setState(state => {
        state.stepsValue = 5.5
        state.steps = value
      })
      return
    }
  }

  return (
    <>
      <h5 className="font-weight-bold d-flex">
        <span>Steps</span>
        <span className="ml-auto">{state.steps} /day</span>
      </h5>
      <ModifierSlider
        onChange={onStepsChange}
        min={500}
        max={20000}
        step={250}
        defaultVal={state.steps}
      />
    </>
  )
}

// <h5 className="font-weight-bold">Steps</h5>
//   <FormRadio
//     checked={state.stepsValue === 0}
//     onChange={() => onStepsChange(0)}>{`< 6k`}</FormRadio>
//   <FormRadio
//     checked={state.stepsValue === 0.5}
//     onChange={() => onStepsChange(0.5)}>{`6k < st < 7.5k`}</FormRadio>
//   <FormRadio
//     checked={state.stepsValue === 1}
//     onChange={() => onStepsChange(1)}>{`7.5k < st < 8.75k`}</FormRadio>
//   <FormRadio
//     checked={state.stepsValue === 1.5}
//     onChange={() => onStepsChange(1.5)}>{`8.75k < st < 10k`}</FormRadio>
//   <FormRadio
//     checked={state.stepsValue === 2}
//     onChange={() => onStepsChange(2)}>{`10k < st < 11.25k`}</FormRadio>
//   <FormRadio
//     checked={state.stepsValue === 2.5}
//     onChange={() => onStepsChange(2.5)}>{`11.25k < st < 12.5k`}</FormRadio>
//   <FormRadio
//     checked={state.stepsValue === 3}
//     onChange={() => onStepsChange(3)}>{`> 12.5`}</FormRadio>

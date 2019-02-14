import React, { useState, useEffect } from "react"
import { FormRadio, FormInput } from "shards-react"
import ModifierSlider from "./ModifierSlider"
import Store from "../../store"

export default function PersonAge() {
  const { state, setState } = Store.useStore()

  const onAgeChange = val => {
    const value = parseFloat(val)
    const modifier = value > 45 ? -0.5 : value < 25 ? 0.5 : 0
    setState(state => {
      state.ageValue = modifier
      state.age = value
    })
  }

  return (
    <>
      <h5 className="font-weight-bold d-flex">
        <span>Age</span>
        <span className="ml-auto">{state.age} y</span>
      </h5>
      <ModifierSlider
        onChange={onAgeChange}
        max={80}
        min={15}
        step={1}
        defaultVal={state.age}
      />
    </>
  )
}

// <FormRadio
//   checked={state.ageValue === 0}
//   onChange={() => onAgeChange(0)}>{`Normal`}</FormRadio>
//   <FormRadio
//     checked={state.ageValue === -0.5}
//     onChange={() => onAgeChange(-0.5)}>
//     {`> 45`}
//   </FormRadio>
//   <FormRadio
//     checked={state.ageValue === 0.5}
//     onChange={() => onAgeChange(0.5)}>
//     {`< 25`}
//   </FormRadio>

import React, { useState, useEffect } from "react"
import { FormRadio, FormInput, FormCheckbox } from "shards-react"
import Store from "../../store"
import ModifierSlider from "./ModifierSlider"

export default function PersonWeight() {
  const { state, setState } = Store.useStore()

  useEffect(
    () => {
      setState(state => {
        state.weightInLbs = Number((state.weight * 2.205).toFixed(0))
      })
    },
    [state.weight]
  )

  const onWeightChange = val => {
    const value = parseFloat(val).toFixed(1)
    setState(state => {
      state.weight = value
    })
  }

  return (
    <>
      <h5 className="font-weight-bold d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <span className="mr-3">Weight</span>
        </div>
        <div style={{ width: 167 }} className="d-flex justify-content-between">
          <span style={{ width: 80 }}>{state.weight} kg</span>
          <span>|</span>
          <span style={{ width: 75 }} className="text-right">
            {state.weightInLbs} lbs
          </span>
        </div>
      </h5>
      <ModifierSlider
        onChange={onWeightChange}
        max={150}
        min={50}
        step={0.5}
        defaultVal={state.weight}
      />
    </>
  )
}

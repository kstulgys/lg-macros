import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "../store"

export default function PersonWeight() {
  const { state, setState } = Store.useStore()

  const onWeightChange = e => {
    const { value } = e.target
    setState(state => {
      state.weight = Number(value)
    })
  }

  const onUnitChange = () =>
    state.unit === "kg"
      ? setState(state => {
          state.unit = "lbs"
        })
      : setState(state => {
          state.unit = "kg"
        })

  const onHeightChange = e => {
    const { value } = e.target
    setState(state => {
      state.height = Number(value)
    })
  }

  return (
    <>
      <h3>Weight & Height</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FormInput
          type="number"
          style={{ maxWidth: 90 }}
          value={state.weight || ""}
          onChange={onWeightChange}
        />{" "}
        <FormCheckbox checked={state.weightUnit === "kg"}>kg</FormCheckbox>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <FormInput
          type="number"
          style={{ maxWidth: 90 }}
          value={state.height || ""}
          onChange={onHeightChange}
        />{" "}
        <FormCheckbox checked={state.heightUnit === "m"}>m</FormCheckbox>
        {
          // <FormCheckbox checked={state.unit === "lbs"} onChange={onUnitChange}>
          //   lbs
          // </FormCheckbox>
        }
      </div>
    </>
  )
}

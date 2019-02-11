import React, { useState, useEffect } from "react"
import { FormRadio, FormInput } from "shards-react"
import Store from "../../store"
import SelectWeightUnit from "./SelectWeightUnit"

export default function PersonWeight() {
  const { state, setState } = Store.useStore()

  const onWeightChange = e => {
    const { value } = e.target
    // console.log(value)
    if (value === "") {
      setState(state => {
        state.weight = ""
        state.weightInLbs = ""
      })
      return
    }
    if (state.weightUnit === "kg") {
      setState(state => {
        state.weight = Number(value)
        state.weightInLbs = Number((state.weight * 2.205).toFixed(0))
      })
    }
    if (state.weightUnit === "lbs") {
      setState(state => {
        state.weightInLbs = Number(value)
        state.weight = Number((state.weightInLbs / 2.205).toFixed(1))
      })
    }
    return
  }

  const onHeightChange = e => {
    const { value } = e.target
    setState(state => {
      state.height = Number(value)
    })
  }

  return (
    <>
      <h5 className="font-weight-bold">Weight & Height</h5>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FormInput
          type="number"
          style={{ width: 80 }}
          value={state.weightUnit === "kg" ? state.weight : state.weightInLbs}
          onChange={onWeightChange}
        />
        <SelectWeightUnit />
      </div>

      <div
        className="mt-2 mb-2"
        style={{ display: "flex", alignItems: "center" }}>
        <FormInput
          type="number"
          style={{ width: 80 }}
          value={state.height || ""}
          onChange={onHeightChange}
        />
        <span className="pl-2">
          <FormRadio checked={state.heightUnit === "m"}>m</FormRadio>
        </span>

        {
          // <FormCheckbox checked={state.unit === "lbs"} onChange={onUnitChange}>
          //   lbs
          // </FormCheckbox>
        }
      </div>
    </>
  )
}

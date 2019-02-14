import React, { useState, useEffect } from "react"
import { FormRadio, FormInput } from "shards-react"
import Store from "../../store"

export default function PersonMuscular() {
  const { state, setState } = Store.useStore()

  // const muscular =
  //   state.ffmi > 24
  //     ? "Very muscular"
  //     : state.ffmi > 22
  //     ? "Muscular"
  //     : "Not Muscular"

  const getFfm = () => state.weight * (1 - state.bodyFat / 100)
  const getFfmi = () =>
    getFfm() / Math.pow(state.height, 2) + 6.1 * (1.8 - state.height)

  useEffect(
    () => {
      const ffmi = getFfmi().toFixed(1)
      setState(state => {
        state.ffmi = ffmi
      })
      if (ffmi < 22) {
        setState(state => {
          state.muscularValue = 0
        })
        return
      }
      if (ffmi > 24) {
        setState(state => {
          state.muscularValue = 1
        })
        return
      }
      if (ffmi > 22) {
        setState(state => {
          state.muscularValue = 0.5
        })
        return
      }
    },
    [state]
  )
  //state.height, state.weight, state.bodyFatValue, state.bodyFat
  return (
    <>
      <h5 className="font-weight-bold d-flex">
        <span>FFMI</span>
        <span className="ml-auto">{state.ffmi}</span>
      </h5>
    </>
  )
}
// <FormRadio checked={state.muscularValue === 0}>
//   {`Not muscular`}
// </FormRadio>
// <FormRadio checked={state.muscularValue === 0.5}>{`FFMI > 22`}</FormRadio>
// <FormRadio checked={state.muscularValue === 1}>{`FFMI > 24`}</FormRadio>

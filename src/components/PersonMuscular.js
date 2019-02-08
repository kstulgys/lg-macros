import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "../store"

export default function PersonMuscular() {
  const { state, setState } = Store.useStore()

  const getBodyFat = () => {
    if (state.bodyFatValue === 0) {
      return 15
    }
    if (state.bodyFatValue === 0.5) {
      return 9
    }
    if (state.bodyFatValue === -0.5) {
      return 22.5
    }
    if (state.bodyFatValue === -1) {
      return 27.5
    }
    if (state.bodyFatValue === -1.5) {
      return 35
    }

    return
  }

  const getFfm = () => state.weight * (1 - getBodyFat() / 100)
  const getFfmi = () =>
    getFfm() / Math.pow(state.height, 2) + 6.1 * (1.8 - state.height)
  // console.log(ffmi)

  //FFMI [kg/m2] = FFM [kg] / (height [m])2 + 6.1 × (1.8 − height [m])

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
    [state.weight, state.bodyFatValue, state.height]
  )

  return (
    <>
      <h3>Muscular (auto calculated) {state.ffmi && `FFMI: ~${state.ffmi}`}</h3>
      <FormCheckbox checked={state.muscularValue === 0}>
        {`Not muscular`}
      </FormCheckbox>
      <FormCheckbox checked={state.muscularValue === 0.5}>
        {`Fat-Free Mass Index (FFMI) > 22`}
      </FormCheckbox>
      <FormCheckbox checked={state.muscularValue === 1}>
        {`Fat-Free Mass Index (FFMI) > 24`}
      </FormCheckbox>
    </>
  )
}

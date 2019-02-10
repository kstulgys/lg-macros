import React, { useState, useEffect } from "react"
import { FormRadio, FormInput } from "shards-react"
import Store from "../../store"

export default function PersonMuscular() {
  const { state, setState } = Store.useStore()

  const getBodyFat = () => {
    if (state.bodyFatValue === 0) {
      return state.sexValue === 28 ? 15 : 23
    }
    if (state.bodyFatValue === 0.5) {
      return state.bodyFat || 10
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
      <h5 className="font-weight-bold">
        Muscular (auto calc) {state.ffmi && `FFMI: ~${state.ffmi}`}
      </h5>
      <FormRadio checked={state.muscularValue === 0}>
        {`Not muscular`}
      </FormRadio>
      <FormRadio checked={state.muscularValue === 0.5}>{`FFMI > 22`}</FormRadio>
      <FormRadio checked={state.muscularValue === 1}>{`FFMI > 24`}</FormRadio>
    </>
  )
}

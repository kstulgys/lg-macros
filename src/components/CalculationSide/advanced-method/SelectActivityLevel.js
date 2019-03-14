import React, { useState, useEffect } from "react"
import { FormRadio } from "shards-react"
import Store from "../../../store"

export default function SelectActivityLevel() {
  const { state, setState } = Store.useStore()

  const onActivitySelect = val => {
    setState(state => {
      state.activityMultiplier = val
    })
  }

  return (
    <>
      <h5 className="font-weight-bold d-flex">
        <span>Activity level without exercise</span>
      </h5>
      <FormRadio
        checked={state.activityMultiplier === 1}
        onChange={() => {
          onActivitySelect(1)
        }}>
        Sedentary - Typical desk job / Sitting most of the day
      </FormRadio>
      <FormRadio
        checked={state.activityMultiplier === 1.12}
        onChange={() => {
          onActivitySelect(1.12)
        }}>
        Lightly Active - Walking around a good amount, retail jobs
      </FormRadio>
      <FormRadio
        checked={state.activityMultiplier === 1.26}
        onChange={() => {
          onActivitySelect(1.26)
        }}>
        Moderately Active - Walking constantly in a fast paced environment,
        waiting tables
      </FormRadio>
      <FormRadio
        checked={state.activityMultiplier === 1.47}
        onChange={() => {
          onActivitySelect(1.47)
        }}>
        Vigorously Active - Very labor intensive, construction workers
      </FormRadio>
    </>
  )
}

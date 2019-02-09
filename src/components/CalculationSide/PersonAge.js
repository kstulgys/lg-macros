import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "../../store"

export default function PersonAge() {
  const { state, setState } = Store.useStore()

  const onAgeChange = val =>
    state.ageValue === val
      ? setState(state => {
          state.ageValue = 0
        })
      : setState(state => {
          state.ageValue = val
        })

  return (
    <>
      <h5 className="font-weight-bold">Age</h5>
      <FormCheckbox
        checked={state.ageValue === 0}
        onChange={() => onAgeChange(0)}
      >{`Normal`}</FormCheckbox>
      <FormCheckbox
        checked={state.ageValue === -0.5}
        onChange={() => onAgeChange(-0.5)}
      >
        {`Years > 45`}
      </FormCheckbox>
      <FormCheckbox
        checked={state.ageValue === 0.5}
        onChange={() => onAgeChange(0.5)}
      >
        {`Years < 25`}
      </FormCheckbox>
    </>
  )
}

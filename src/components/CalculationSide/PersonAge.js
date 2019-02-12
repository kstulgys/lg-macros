import React, { useState, useEffect } from "react"
import { FormRadio, FormInput } from "shards-react"
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
      <FormRadio
        checked={state.ageValue === 0}
        onChange={() => onAgeChange(0)}>{`Normal`}</FormRadio>
      <FormRadio
        checked={state.ageValue === -0.5}
        onChange={() => onAgeChange(-0.5)}>
        {`> 45`}
      </FormRadio>
      <FormRadio
        checked={state.ageValue === 0.5}
        onChange={() => onAgeChange(0.5)}>
        {`< 25`}
      </FormRadio>
    </>
  )
}

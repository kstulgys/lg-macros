import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput, FormRadio } from "shards-react"
import Store from "../../store"

export default function PersonSex() {
  const { state, setState } = Store.useStore()

  const onSexChange = () => {
    if (state.sexValue === 28) {
      setState(state => {
        state.gender = "Female"
        state.sexValue = 26
      })
    } else {
      setState(state => {
        state.gender = "Male"
        state.sexValue = 28
      })
    }
  }

  useEffect(
    () => {
      if (state.sexValue === 26) {
        setState(state => {
          state.muscularValue = 0
        })
      }
    },
    [state.sexValue]
  )

  return (
    <>
      <h5 className="font-weight-bold d-flex">
        <div className="d-flex align-items-center">
          <span className="mr-3">Gender</span>
          <FormCheckbox
            toggle
            checked={state.sexValue === 28}
            onChange={onSexChange}
          />
        </div>
        <span className="ml-auto">{state.gender}</span>
      </h5>
    </>
  )
}

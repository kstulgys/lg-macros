import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput, FormRadio } from "shards-react"
import Store from "../../store"

export default function PersonSex() {
  const { state, setState } = Store.useStore()

  const onSexChange = () => {
    if (state.sexValue === 28) {
      setState(state => {
        state.sexValue = 26
        state.muscularValue = 0
      })
    } else {
      setState(state => {
        state.sexValue = 28
      })
    }
  }

  return (
    <>
      <h5 className="font-weight-bold">Sex</h5>
      <FormRadio checked={state.sexValue === 28} onChange={onSexChange}>
        Male
      </FormRadio>
      <FormRadio checked={state.sexValue === 26} onChange={onSexChange}>
        Female
      </FormRadio>
    </>
  )
}

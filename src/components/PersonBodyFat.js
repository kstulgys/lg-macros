import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "../store"

export default function PersonSex() {
  const { state, setState } = Store.useStore()

  const onBodyFatChange = val =>
    state.bodyFatValue === val
      ? setState(state => {
          state.bodyFatValue = 0
        })
      : setState(state => {
          state.bodyFatValue = val
        })

  return (
    <>
      <h3>Body Fat</h3>

      <FormCheckbox
        checked={state.bodyFatValue === 0.5}
        onChange={() => onBodyFatChange(0.5)}>
        {state.sexValue === 28 ? `BF < 10 %` : `BF < 18 %`}
      </FormCheckbox>
      <FormCheckbox
        checked={state.bodyFatValue === 0}
        onChange={() => onBodyFatChange(0)}>
        {`BF ~ 15 %`}
      </FormCheckbox>
      <FormCheckbox
        checked={state.bodyFatValue === -0.5}
        onChange={() => onBodyFatChange(-0.5)}>
        {state.sexValue === 28 ? `20 % < BF < 24 %` : `28 % < BF < 32 %`}
      </FormCheckbox>
      <FormCheckbox
        checked={state.bodyFatValue === -1}
        onChange={() => onBodyFatChange(-1)}>
        {state.sexValue === 28 ? `25 % < BF < 29 %` : `33 % < BF < 37 %`}
      </FormCheckbox>
      <FormCheckbox
        checked={state.bodyFatValue === -1.5}
        onChange={() => onBodyFatChange(-1.5)}>
        {state.sexValue === 28 ? `BF > 29 %` : `BF > 37 %`}
      </FormCheckbox>
    </>
  )
}

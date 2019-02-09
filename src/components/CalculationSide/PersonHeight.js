import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "../../store"

export default function PersonHeight() {
  const { state, setState } = Store.useStore()

  // const onHeightChange = val =>
  //   state.heightValue === val
  //     ? setState(state => {
  //         state.heightValue = 0
  //       })
  //     : setState(state => {
  //         state.heightValue = val
  //       })

  useEffect(
    () => {
      const maleIsTall = state.height > 1.85
      const maleIsShort = state.height < 1.67

      const femaleIsTall = state.height > 1.7
      const femaleIsShort = state.height < 1.53

      const isTall = state.sexValue === 28 ? maleIsTall : femaleIsTall
      const isShort = state.sexValue === 28 ? maleIsShort : femaleIsShort

      if (!isTall && !isShort) {
        setState(state => {
          state.heightValue = 0
        })
        return
      }
      if (isTall) {
        setState(state => {
          state.heightValue = 1
        })
        return
      }
      if (isShort) {
        setState(state => {
          state.heightValue = -1
        })
        return
      }
    },
    [state.sexValue, state.height]
  )

  return (
    <>
      <h5 className="font-weight-bold">Height (auto calc)</h5>
      <FormCheckbox checked={state.heightValue === 0}>{`Normal`}</FormCheckbox>
      <FormCheckbox
        checked={state.heightValue === 1}
        // onChange={() => onHeightChange(1)}
      >
        {state.sexValue === 28
          ? `Tall > 1.85 m (6 feet, 1 inch)`
          : `Tall > 1.70 m (5 feet, 7 inches)`}
      </FormCheckbox>
      <FormCheckbox
        checked={state.heightValue === -1}
        // onChange={() => onHeightChange(-1)}
      >
        {state.sexValue === 28
          ? `Short < 1.67 m (5 feet, 5 inches)`
          : `Short < 1.53 m (5 feet)`}
      </FormCheckbox>
    </>
  )
}

import React, { useState, useEffect } from "react"
import { FormRadio, FormInput } from "shards-react"
import ModifierSlider from "./ModifierSlider"
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

  // useEffect(
  //   () => {
  // const maleIsTall = state.height > 1.85
  // const maleIsShort = state.height < 1.67

  // const femaleIsTall = state.height > 1.7
  // const femaleIsShort = state.height < 1.53

  // const isTall = state.sexValue === 28 ? maleIsTall : femaleIsTall
  // const isShort = state.sexValue === 28 ? maleIsShort : femaleIsShort

  // if (!isTall && !isShort) {
  //   setState(state => {
  //     state.heightValue = 0
  //   })
  //   return
  // }
  // if (isTall) {
  //   setState(state => {
  //     state.heightValue = 1
  //   })
  //   return
  // }
  // if (isShort) {
  //   setState(state => {
  //     state.heightValue = -1
  //   })
  //   return
  // }
  //   },
  //   [state.sexValue, state.height]
  // )

  const onHeightChange = val => {
    const value = parseFloat(val).toFixed(2)

    const maleIsTall = state.height > 1.85
    const maleIsShort = state.height < 1.67

    const femaleIsTall = state.height > 1.7
    const femaleIsShort = state.height < 1.53

    const isTall = state.sexValue === 28 ? maleIsTall : femaleIsTall
    const isShort = state.sexValue === 28 ? maleIsShort : femaleIsShort
    // console.log("height slider val", value)
    if (!isTall && !isShort) {
      setState(state => {
        state.heightValue = 0
        state.height = value
      })
      return
    }
    if (isTall) {
      setState(state => {
        state.heightValue = 1
        state.height = value
      })
      return
    }
    if (isShort) {
      setState(state => {
        state.heightValue = -1
        state.height = value
      })
      return
    }
  }

  return (
    <>
      <h5 className="font-weight-bold d-flex">
        <span>Height</span>
        <span className="ml-auto">{state.height} m</span>
      </h5>
      <ModifierSlider
        onChange={onHeightChange}
        max={2.25}
        min={1.4}
        step={0.01}
        defaultVal={state.height}
      />
    </>
  )
}

// <>
//   <h5 className="font-weight-bold">Height</h5>
//   <FormRadio checked={state.heightValue === 0}>{`Normal`}</FormRadio>
//   <FormRadio checked={state.heightValue === 1}>
//     {state.sexValue === 28 ? `> 1.85 m (6'1")` : `> 1.70 m (5'7")`}
//   </FormRadio>
//   <FormRadio checked={state.heightValue === -1}>
//     {state.sexValue === 28 ? `< 1.67 m (5'5")` : `< 1.53 m (5')`}
//   </FormRadio>
// </>

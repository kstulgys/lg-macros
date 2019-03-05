import React, { useState, useEffect } from "react"
import { FaInfoCircle } from "react-icons/fa"
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader,
  FormCheckbox
} from "shards-react"
import Store from "../../store"

export default function SelectCalDeficit() {
  const { state, setState } = Store.useStore()
  const [isOn, setOn] = useState(true)
  // console.log(state.calDeficitPercent)
  const onCalDeficitChange = e => {
    const { value } = e.target
    setState(state => {
      state.calDeficit = Number(value)
      state.calDeficitPercent = Number(
        (state.calDeficit / state.tdee).toFixed(3)
      )
    })
  }

  // const onCalDeficitPercentChange = e => {
  //   const { value } = e.target
  //   setState(state => {
  //     state.calDeficitPercent = Number(Number(value).toFixed(3))
  //     state.calDeficit = Number(
  //       Math.round(state.tdee * state.calDeficitPercent)
  //     )
  //   })
  // }

  return (
    <>
      <div className="my-4">
        <h5 className="font-weight-bold d-flex mb-0">
          <span className="mr-2">
            {Math.sign(state.calDeficit) === 1 ? "Surplus" : "Deficit"}
          </span>
        </h5>
        <div className="d-flex">
          <span className="ml-auto">{state.calDeficit} Cal</span>
        </div>
        <input
          className="m-0 p-0"
          step="5"
          min="-700"
          max="700"
          type="range"
          value={state.calDeficit}
          onChange={onCalDeficitChange}
        />
        <div className="d-flex">
          <span className="ml-auto">
            {(state.calDeficitPercent * 100).toFixed(1)} %
          </span>
        </div>
      </div>
    </>
  )
}

// <FormCheckbox toggle checked={isOn} onChange={() => setOn(!isOn)} />
// <input
//   className="m-0 p-0"
//   step="0.005"
//   min="-0.3"
//   max="0.3"
//   type="range"
//   value={state.calDeficitPercent}
//   onChange={onCalDeficitPercentChange}
// />

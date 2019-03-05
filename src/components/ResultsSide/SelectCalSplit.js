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

export default function SelectCalSplit() {
  const { state, setState } = Store.useStore()
  // console.log(state.calSplit)
  const onCalSplitChange = e => {
    const { value } = e.target
    setState(state => {
      state.calSplit = Number(Number(value).toFixed(3))
    })
  }

  return (
    <div className="my-4">
      <h5 className="font-weight-bold d-flex align-items-center">
        <span className="mr-2">Cal split</span>
        <span className="ml-auto">{(state.calSplit * 100).toFixed(1)} %</span>
      </h5>

      <input
        className="m-0 p-0"
        step="0.005"
        min="0"
        max="0.4"
        type="range"
        value={state.calSplit}
        onChange={onCalSplitChange}
      />
    </div>
  )
}

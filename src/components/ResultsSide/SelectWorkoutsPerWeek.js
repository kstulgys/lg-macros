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
  FormCheckbox
} from "shards-react"
import Store from "../../store"

export default function SelectWorkoutsPerWeek() {
  const { state, setState } = Store.useStore()

  const onWorkoutsChange = e => {
    const { value } = e.target
    setState(state => {
      state.workoutsPerWeek = Number(value)
    })
  }

  const onUseWorkout = () => {
    setState(state => {
      state.useWorkoutsPerWeek = !state.useWorkoutsPerWeek
    })
  }

  return (
    <div className="my-4">
      <h5 className="font-weight-bold d-flex align-items-center">
        <span className="mr-2">Set train/wk</span>
        <FormCheckbox
          toggle
          checked={state.useWorkoutsPerWeek}
          onChange={onUseWorkout}
        />
        <span className="ml-auto">
          {state.useWorkoutsPerWeek && state.workoutsPerWeek}
        </span>
      </h5>

      {state.useWorkoutsPerWeek && (
        <input
          className="m-0 p-0"
          type="range"
          min="2"
          max="7"
          step="1"
          value={state.workoutsPerWeek}
          onChange={onWorkoutsChange}
        />
      )}
    </div>
  )
}

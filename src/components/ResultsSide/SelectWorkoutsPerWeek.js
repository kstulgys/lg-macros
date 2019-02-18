import React, { useState, useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader
} from 'shards-react'
import Store from '../../store'

export default function SelectWorkoutsPerWeek() {
  const { state, setState } = Store.useStore()

  const onWorkoutsChange = e => {
    const { value } = e.target
    setState(state => {
      state.workoutsPerWeek = Number(value)
    })
  }

  return (
    <div className="my-4">
      <h5 className="font-weight-bold d-flex align-items-center">
        <span>Workouts / week</span>
        <span className="ml-auto">{state.workoutsPerWeek}</span>
      </h5>
      <input
        className="m-0 p-0"
        type="range"
        min="2"
        max="6"
        step="1"
        value={state.workoutsPerWeek}
        onChange={onWorkoutsChange}
      />
    </div>
  )
}

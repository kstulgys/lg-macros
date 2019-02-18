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

export default function SelectCalDeficit() {
  const { state, setState } = Store.useStore()
  // const [isOpen, setOpen] = useState(false)

  const onCalDeficitChange = e => {
    const { value } = e.target
    setState(state => {
      state.calDeficit = Number(value)
    })
  }

  // const getFiberIntakeCalories = () => {
  //   return state.fiberIntake * 4
  // }

  return (
    <div className="mt-3">
      <h5 className="font-weight-bold d-flex align-items-center">
        <span>
          {Math.sign(state.calDeficit) === 1
            ? 'Surplus'
            : Math.sign(state.calDeficit) === -1
            ? 'Deficit'
            : 'Maintenance'}
        </span>
        <span className="ml-auto">{state.calDeficit} Cal</span>
      </h5>
      <input
        className="m-0 p-0"
        step="25"
        min="-500"
        max="500"
        type="range"
        value={state.calDeficit}
        onChange={onCalDeficitChange}
      />
    </div>
  )
}
{
  /* <Dropdown
  open={isOpen}
  toggle={() => setOpen(!isOpen)}
  size="lg"
  className="ml-auto"
>
  <DropdownToggle outline theme="dark" className="p-2">
    {state.calDeficit} Cal
  </DropdownToggle>
  <DropdownMenu>
    {[500, 350, 225].map(n => {
      return (
        <DropdownItem
          key={n}
          className=" my-0"
          onClick={() => onCalDeficitChange(n)}
        >
          {n}
        </DropdownItem>
      )
    })}
  </DropdownMenu>
</Dropdown> */
}

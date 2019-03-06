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
  PopoverHeader
} from "shards-react"
import Store from "../../store"

export default function SelectFiberIntake() {
  const { state, setState } = Store.useStore()
  // const [isOpen, setOpen] = useState(false)

  const onFiberIntakeChange = e => {
    const { value } = e.target
    setState(state => {
      state.fiberIntake = Number(value)
    })
  }

  return (
    <div className="my-4">
      <h5 className="font-weight-bold d-flex align-items-center">
        <span>Fiber/day</span>
        <span className="ml-auto">{state.fiberIntake} g</span>
      </h5>
      <input
        className="m-0 p-0"
        step="5"
        min="30"
        max="80"
        type="range"
        value={state.fiberIntake}
        onChange={onFiberIntakeChange}
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
          {state.fiberIntake} g
        </DropdownToggle>
        <DropdownMenu>
          {[35, 40, 45, 50, 55, 60, 65, 70].map(n => {
            return (
              <DropdownItem
                key={n}
                className=" my-0"
                onClick={() => onFiberIntakeSelect(n)}
              >
                {n}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </h5> */
}

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
  const [isOpen, setOpen] = useState(false)

  const onFiberIntakeSelect = val => {
    setState(state => {
      state.fiberIntake = val
    })
  }

  return (
    <h5 className="font-weight-bold text-center d-flex align-items-center justify-content-center">
      Fiber/day:
      <Dropdown
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
        size="lg"
        className="mx-2">
        <DropdownToggle outline theme="dark" className="p-2">
          {state.fiberIntake} g
        </DropdownToggle>
        <DropdownMenu>
          {[35, 40, 45, 50, 55, 60, 65, 70].map(n => {
            return (
              <DropdownItem
                key={n}
                className=" my-0"
                onClick={() => onFiberIntakeSelect(n)}>
                {n}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </h5>
  )
}

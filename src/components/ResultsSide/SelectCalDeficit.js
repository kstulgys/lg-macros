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

export default function SelectCalDeficit() {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)

  const onCalDeficitChange = val => {
    setState(state => {
      state.calDeficit = val
    })
  }

  // const getFiberIntakeCalories = () => {
  //   return state.fiberIntake * 4
  // }

  return (
    <h5 className="font-weight-bold text-center d-flex align-items-center justify-content-center">
      Deficit:
      <Dropdown
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
        size="lg"
        className="mx-2">
        <DropdownToggle
          outline
          theme="dark"
          caret
          style={{ width: 105 }}
          className="px-0">
          {state.calDeficit} Cal
        </DropdownToggle>
        <DropdownMenu>
          {[500, 350, 225].map(n => {
            return (
              <DropdownItem
                key={n}
                className=" my-0"
                onClick={() => onCalDeficitChange(n)}>
                {n}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </h5>
  )
}

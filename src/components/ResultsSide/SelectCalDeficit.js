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
  const [_calDeficit, _setCalDeficit] = useState(state.calDeficit || 500)

  const onCalDeficitChange = val => {
    _setCalDeficit(val)
    setState(state => {
      state.calDeficit = val
    })
  }

  // const getFiberIntakeCalories = () => {
  //   return state.fiberIntake * 4
  // }

  return (
    <div>
      <Dropdown
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
        size="sm"
        className="mx-2">
        <DropdownToggle
          outline
          theme="dark"
          // disabled={state.bodyFatValue !== 0.5}
          caret
          style={{ fontSize: "1rem", width: 50 }}
          className="px-0">
          {_calDeficit}
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
    </div>
  )
}

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

export default function SelectWeightUnit() {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    if (state.weightUnit === "kg") {
      setState(state => {
        state.weightInLbs = Number((state.weight * 2.205).toFixed(0))
      })
    }
    if (state.weightUnit === "lbs") {
      setState(state => {
        state.weight = Number((state.weightInLbs / 2.205).toFixed(1))
      })
    }
    return
  }, [])

  const onWeightUnitChange = unit => {
    setState(state => {
      state.weightUnit = unit
    })
  }

  return (
    <Dropdown
      open={isOpen}
      toggle={() => setOpen(!isOpen)}
      size=""
      className="mx-2">
      <DropdownToggle
        outline
        theme="dark"
        caret
        style={{ width: 50 }}
        className="px-0">
        {state.weightUnit}
      </DropdownToggle>
      <DropdownMenu>
        {["kg", "lbs"].map(n => {
          return (
            <DropdownItem
              key={n}
              className=" my-0"
              onClick={() => onWeightUnitChange(n)}>
              {n}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

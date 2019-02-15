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
import Store from "../../../store"
import SelectMacroSplit from "./SelectMacroSplit"

export default function SelectMealSize({ size, index }) {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)

  const mealsLength = state.trainingMeals.length - 1
  // const fixedNum = num => {
  //   return Number(num.toFixed(2))
  // }

  const availableSizes = [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8]

  const onMealSizeChange = val => {
    setState(state => {
      state.trainingMeals[index].size = val
    })
  }

  return (
    <Dropdown
      disabled={index === mealsLength}
      open={isOpen}
      toggle={() => setOpen(!isOpen)}
      size="lg"
      className="m-1"
    >
      <DropdownToggle outline theme="dark" className="p-2 w-100">
        {Math.round(size * 100)} %
      </DropdownToggle>
      <DropdownMenu>
        {availableSizes.map(n => {
          return (
            <DropdownItem
              key={n}
              className="text-center"
              onClick={() => onMealSizeChange(n)}
            >
              {Math.round(n * 100)}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

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

export default function SelectMealSize({ size, index }) {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)

  const mealsLength = state.trainingMeals.length - 1

  const makeNumberNormal = num => {
    return Number(num.toFixed(2))
  }

  const sizeBeforeIndex = state.trainingMeals
    .slice(0, index)
    .reduce((prev, next) => makeNumberNormal(prev + next), 0)

  const availableSizes = [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.75, 0.8]

  const getMealSizes = () => {
    if (index === 0) {
      return availableSizes
    } else {
      return availableSizes.filter(
        s => s <= makeNumberNormal(1 - sizeBeforeIndex)
      )
    }
  }

  const mealSizes = getMealSizes()

  const onMealSizeChange = val => {
    setState(state => {
      state.trainingMeals[index] = val
    })
  }

  return (
    <div>
      <Dropdown
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
        size="lg"
        className="mx-2 my-2"
      >
        <DropdownToggle
          disabled={index === mealsLength}
          outline
          theme="dark"
          caret={index !== mealsLength}
          className="p-2"
          style={{ width: 80 }}
        >
          {Math.round(size * 100)} %
        </DropdownToggle>
        <DropdownMenu>
          {getMealSizes().map(n => {
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
    </div>
  )
}

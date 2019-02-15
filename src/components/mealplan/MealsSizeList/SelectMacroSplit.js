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

export default function SelectMacroSplit({ mealIndex, macroLabel, split }) {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  // useEffect(
  //   () => {
  //     setState(state => {
  //       state.trainingMeals[mealIndex].macroSplit[2] = Number(
  //         1 -
  //           state.trainingMeals[mealIndex].macroSplit[0] -
  //           state.trainingMeals[mealIndex].macroSplit[1]
  //       ).toFixed(3)
  //     })
  //   },
  //   [state.trainingMeals[mealIndex].macroSplit]
  // )

  const macroSplitOptions = [0.1, 0.2, 0.25, 0.4, 0.5, 0.55, 0.6]

  const availableMacroSplitOptions = () =>
    macroSplitOptions.filter((opt, i) => {
      if (macroLabel === "P") {
        return opt < 1 - state.trainingMeals[mealIndex].macroSplit[1]
      } else {
        return opt < 1 - state.trainingMeals[mealIndex].macroSplit[0]
      }
    })

  const onMacroSplitSelect = value => {
    const splitIdx = macroLabel === "P" ? 0 : macroLabel === "C" ? 1 : 2
    const carbsAndFatsSplit = Number(((1 - value) / 2).toFixed(3))

    if (splitIdx === 0) {
      setState(state => {
        state.trainingMeals[mealIndex].macroSplit[splitIdx] = value
        state.trainingMeals[mealIndex].macroSplit[1] = carbsAndFatsSplit
        state.trainingMeals[mealIndex].macroSplit[2] = carbsAndFatsSplit
      })
      return
    }
    if (splitIdx === 1) {
      setState(state => {
        state.trainingMeals[mealIndex].macroSplit[splitIdx] = value
        state.trainingMeals[mealIndex].macroSplit[2] = Number(
          (
            1 -
            state.trainingMeals[mealIndex].macroSplit[0] -
            state.trainingMeals[mealIndex].macroSplit[1]
          ).toFixed(3)
        )
      })
      return
    }
  }

  return (
    <Dropdown
      disabled={macroLabel === "F"}
      open={isOpen}
      toggle={() => setOpen(!isOpen)}
      size="lg"
      className="m-1"
    >
      <DropdownToggle outline theme="dark" className="p-2 w-100">
        {macroLabel}: {Number((split * 100).toFixed(1))} %
      </DropdownToggle>
      <DropdownMenu>
        {availableMacroSplitOptions().map(value => {
          return (
            <DropdownItem
              key={value}
              className="text-center"
              onClick={() => onMacroSplitSelect(value)}
            >
              {Math.round(value * 100)}
            </DropdownItem>
          )
        })}
      </DropdownMenu>
    </Dropdown>
  )
}

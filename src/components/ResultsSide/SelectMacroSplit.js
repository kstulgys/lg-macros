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

export default function SelectMacroSplit({ macroSplitArray, macro, day }) {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  // const [split, setSplit] = useState(false)

  const getDropdownToggleText = () => {
    if (macro === "p" && day === "training") {
      return `${Number((state.trainingProteinSplit * 100).toFixed(1))} %`
    }
    if (macro === "p" && day === "rest") {
      return `${Number((state.restProteinSplit * 100).toFixed(1))} %`
    }
    if (macro === "c" && day === "training") {
      return `${Number((state.trainingCarbsSplit * 100).toFixed(1))} %`
    }
    if (macro === "c" && day === "rest") {
      return `${Number((state.restCarbsSplit * 100).toFixed(1))} %`
    }
    if (macro === "f" && day === "training") {
      return `${Number((state.trainingFatsSplit * 100).toFixed(1))} %`
    }
    if (macro === "f" && day === "rest") {
      return `${Number((state.restFatsSplit * 100).toFixed(1))} %`
    }
    return
  }

  const onMacroSplitSelect = val => {
    const getCarbsAndFatsSplit = () => Number(((1 - val) / 2).toFixed(3))

    if (macro === "p" && day === "training") {
      const carbsAndFatsSplit = getCarbsAndFatsSplit()
      setState(state => {
        state.trainingProteinSplit = val
        state.trainingCarbsSplit = carbsAndFatsSplit
        state.trainingFatsSplit = carbsAndFatsSplit
      })
    }
    if (macro === "p" && day === "rest") {
      const carbsAndFatsSplit = getCarbsAndFatsSplit()
      setState(state => {
        state.restProteinSplit = val
        state.restCarbsSplit = carbsAndFatsSplit
        state.restFatsSplit = carbsAndFatsSplit
      })
    }
    if (macro === "c" && day === "training") {
      const getFatsSplit = Number(
        (1 - val - state.trainingProteinSplit).toFixed(3)
      )
      setState(state => {
        state.trainingCarbsSplit = val
        state.trainingFatsSplit = getFatsSplit
      })
    }
    if (macro === "c" && day === "rest") {
      const getFatsSplit = Number((1 - val - state.restProteinSplit).toFixed(3))
      setState(state => {
        state.restCarbsSplit = val
        state.restFatsSplit = getFatsSplit
      })
    }
    return
  }

  return (
    <div className="ml-auto">
      <Dropdown open={isOpen} toggle={() => setOpen(!isOpen)} size="lg">
        <DropdownToggle
          outline
          theme="dark"
          disabled={macro === "f"}
          caret
          style={{ width: 100 }}
          className="p-2">
          {getDropdownToggleText()}
        </DropdownToggle>
        <DropdownMenu right>
          {macroSplitArray.map(({ text, value }) => {
            return (
              <DropdownItem
                key={text}
                className=" my-0"
                onClick={() => onMacroSplitSelect(value)}>
                {text}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

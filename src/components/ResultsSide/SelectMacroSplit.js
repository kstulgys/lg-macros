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

export default function SelectMacroSplit({ macro, day }) {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)

  // useEffect(
  //   () => {
  //     if (day === "training") {
  //       setState(state => {
  //         state.trainingTotalMacroSplit[2] = Number(
  //           (
  //             1 -
  //             state.trainingTotalMacroSplit[0] -
  //             state.trainingTotalMacroSplit[1]
  //           ).toFixed(2)
  //         )
  //       })
  //     }
  //     if (day === "rest") {
  //       setState(state => {
  //         state.restTotalMacroSplit[2] = Number(
  //           (
  //             1 -
  //             state.restTotalMacroSplit[0] -
  //             state.restTotalMacroSplit[1]
  //           ).toFixed(2)
  //         )
  //       })
  //     }
  //   },
  //   [state.trainingTotalMacroSplit, state.restTotalMacroSplit]
  // )

  const macroSplitOptions = [0.1, 0.2, 0.25, 0.4, 0.5, 0.55, 0.6]

  const availableMacroSplitOptions = () =>
    macroSplitOptions.filter((opt, i) => {
      if (macro === 'p') {
        return opt < 1 - state.trainingTotalMacroSplit[1]
      } else {
        return opt < 1 - state.trainingTotalMacroSplit[0]
      }
    })

  const getDropdownToggleText = () => {
    if (macro === 'p' && day === 'training') {
      return `${Number((state.trainingTotalMacroSplit[0] * 100).toFixed(1))} %`
    }
    if (macro === 'p' && day === 'rest') {
      return `${Number((state.restTotalMacroSplit[0] * 100).toFixed(1))} %`
    }
    if (macro === 'c' && day === 'training') {
      return `${Number((state.trainingTotalMacroSplit[1] * 100).toFixed(1))} %`
    }
    if (macro === 'c' && day === 'rest') {
      return `${Number((state.restTotalMacroSplit[1] * 100).toFixed(1))} %`
    }
    if (macro === 'f' && day === 'training') {
      return `${Number((state.trainingTotalMacroSplit[2] * 100).toFixed(1))} %`
    }
    if (macro === 'f' && day === 'rest') {
      return `${Number((state.restTotalMacroSplit[2] * 100).toFixed(1))} %`
    }
    return
  }

  const onMacroSplitSelect = val => {
    const getCarbsAndFatsSplit = () => Number(((1 - val) / 2).toFixed(3))

    if (macro === 'p' && day === 'training') {
      const carbsAndFatsSplit = getCarbsAndFatsSplit()
      setState(state => {
        state.trainingTotalMacroSplit[0] = val
        state.trainingTotalMacroSplit[1] = carbsAndFatsSplit
        state.trainingTotalMacroSplit[2] = carbsAndFatsSplit
      })
    }
    if (macro === 'p' && day === 'rest') {
      const carbsAndFatsSplit = getCarbsAndFatsSplit()
      setState(state => {
        state.restTotalMacroSplit[0] = val
        state.restTotalMacroSplit[1] = carbsAndFatsSplit
        state.restTotalMacroSplit[2] = carbsAndFatsSplit
      })
    }
    if (macro === 'c' && day === 'training') {
      const getFatsSplit = Number(
        (1 - val - state.trainingTotalMacroSplit[0]).toFixed(3)
      )
      setState(state => {
        state.trainingTotalMacroSplit[1] = val
        state.trainingTotalMacroSplit[2] = getFatsSplit
      })
    }
    if (macro === 'c' && day === 'rest') {
      const getFatsSplit = Number(
        (1 - val - state.restTotalMacroSplit[0]).toFixed(3)
      )
      setState(state => {
        state.restTotalMacroSplit[1] = val
        state.restTotalMacroSplit[2] = getFatsSplit
      })
    }
    return
  }

  return (
    <div className="ml-auto">
      <Dropdown
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
        size="lg"
        disabled={macro === 'f'}
      >
        <DropdownToggle
          outline
          theme="dark"
          style={{ width: 100 }}
          className="p-2"
        >
          {getDropdownToggleText()}
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
    </div>
  )
}

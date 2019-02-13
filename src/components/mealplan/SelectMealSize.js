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

export default function SelectMealSize({ size, index }) {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  //   const [mealSize, setMealSize] = useState(size)

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
        className="mx-2">
        <DropdownToggle outline theme="dark" caret className="p-2">
          {Math.round(size * 100)} %
        </DropdownToggle>
        <DropdownMenu>
          {[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8].map(n => {
            return (
              <DropdownItem
                key={n}
                className="my-0"
                onClick={() => onMealSizeChange(n)}>
                {Math.round(n * 100)}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

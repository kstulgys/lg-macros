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
import Store from "../.././store"

export default function SelectQuantity() {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const onIngredientSelect = val => {
    setQuantity(val)
    console.log(val)
  }

  const quantityList = [1, 1.1, 1]

  return (
    <div>
      <Dropdown
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
        size="lg"
        className="mx-2">
        <DropdownToggle
          outline
          theme="dark"
          style={{ width: 150 }}
          className="p-1">
          {quantity}
        </DropdownToggle>
        <DropdownMenu>
          {quantityList.map(({ text, value }) => {
            return (
              <DropdownItem
                key={text}
                className="text-center"
                onClick={() => onIngredientSelect(text)}>
                {text}
              </DropdownItem>
            )
          })}
        </DropdownMenu>
      </Dropdown>
    </div>
  )
}

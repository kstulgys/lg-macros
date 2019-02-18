import React, { useState, useEffect } from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import {
  FormSelect,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Popover,
  PopoverBody,
  PopoverHeader
} from 'shards-react'
import Store from '../../../store'

export default function SelectIngredient() {
  const { state, setState } = Store.useStore()
  const [isOpen, setOpen] = useState(false)
  const [ingredient, setIngredient] = useState('Beef mince 5%')

  const onIngredientSelect = val => {
    setIngredient(val)
    console.log(val)
  }

  const ingredients = [
    { text: 'Beef mince 5%', value: 1 },
    { text: 'Tofu', value: 1 },
    { text: 'Salmon', value: 1 }
  ]

  return (
    <FormSelect className="w-100">
      {ingredients.map(({ text, value }) => {
        return (
          <option
            // className="w-100"
            key={text}
            value={text}
            onClick={() => onIngredientSelect(text)}>
            {text}
          </option>
        )
      })}
    </FormSelect>
  )
}

// <Dropdown
// open={isOpen}
// toggle={() => setOpen(!isOpen)}
// size="lg"
// className="mx-2">
// <DropdownToggle
//   outline
//   theme="dark"
//   style={{ width: 150 }}
//   className="p-1">
//   {ingredient}
// </DropdownToggle>
// <DropdownMenu>
// {ingredients.map(({ text, value }) => {
//   return (
//     <DropdownItem
//       key={text}
//       className="text-center"
//       onClick={() => onIngredientSelect(text)}>
//       {text}
//     </DropdownItem>
//   )
// })}
// </DropdownMenu>
// </Dropdown>

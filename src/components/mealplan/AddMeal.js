import React from 'react'
import { FaRegPlusSquare } from 'react-icons/fa'
import Store from '../../store'

export default function AddMeal() {
  const { state, setState } = Store.useStore()

  const onMealAdd = () => {
    const lastIndex = state.trainingMeals.length
    setState(state => {
      state.trainingMeals[lastIndex] = 0.5
    })
  }

  return (
    <FaRegPlusSquare
      onClick={onMealAdd}
      size="3em"
      style={{ cursor: 'pointer' }}
    />
  )
}

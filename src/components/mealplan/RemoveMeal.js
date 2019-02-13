import React from 'react'
import { FaRegMinusSquare } from 'react-icons/fa'
import Store from '../../store'

export default function RemoveMeal() {
  const { state, setState } = Store.useStore()

  const onMealRemove = () => {
    // const lastIndex = state.trainingMeals.length - 1
    setState(state => {
      state.trainingMeals.pop()
    })
  }

  //   setState(state => {
  //     state.trainingMeals = state.trainingMeals.filter(
  //       (item, idx) => idx !== lastIndex
  //     )
  //   })

  return (
    <FaRegMinusSquare
      theme="dark"
      onClick={onMealRemove}
      size="3em"
      style={{ cursor: 'pointer' }}
    />
  )
}

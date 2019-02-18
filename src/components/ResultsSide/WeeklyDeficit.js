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

export default function WeeklyDeficit() {
  const { state, setState } = Store.useStore()

  const totalCaloriesPerWeekMaintain = () => {
    const trainingDaysWeeklyCalories =
      (state.tdee + 450) * state.workoutsPerWeek

    const restDaysWeeklyCalories = state.tdee * (7 - state.workoutsPerWeek)
    // console.log(restDaysWeeklyCalories)
    const totalCaloriesPerWeek =
      trainingDaysWeeklyCalories + restDaysWeeklyCalories
    // console.log(totalCaloriesPerWeek)
    // const totalCalPerWeek = Math.round(totalCaloriesPerWeek - state.tdee)
    return totalCaloriesPerWeek
  }

  const weeklyDeficit = () => {
    const trainingDaysWeeklyCalories =
      state.trainingCalories * state.workoutsPerWeek

    const restDaysWeeklyCalories =
      state.restCalories * (7 - state.workoutsPerWeek)
    // console.log(restDaysWeeklyCalories)
    const totalCaloriesPerWeek =
      trainingDaysWeeklyCalories + restDaysWeeklyCalories
    // console.log(totalCaloriesPerWeek)
    // const totalCalPerWeek = Math.round(totalCaloriesPerWeek - state.tdee)
    const weeklyDeficit = totalCaloriesPerWeek - totalCaloriesPerWeekMaintain()
    return weeklyDeficit
  }

  return (
    <>
      <div className="my-4">
        <h5 className="font-weight-bold d-flex align-items-center">
          <span>TDEE / wk</span>
          <span className="ml-auto">{totalCaloriesPerWeekMaintain()} Cal</span>
        </h5>
      </div>
      <div className="my-4">
        <h5 className="font-weight-bold d-flex align-items-center">
          <span>
            {Math.sign(weeklyDeficit()) === 1 ? 'Surplus / wk' : 'Deficit / wk'}
          </span>
          <span className="ml-auto">{weeklyDeficit()} Cal</span>
        </h5>
      </div>
    </>
  )
}

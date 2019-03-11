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

export default function WeeklyDeficit() {
  const { state, setState } = Store.useStore()

  const caloriesPerWeekCurrent = () => {
    return (
      state.trainingCalories * state.workoutsPerWeek +
      state.restCalories * (7 - state.workoutsPerWeek)
    )
  }

  const caloriesPerWeekMaintain = () => {
    return Math.round(state.tdee * 7)
  }

  const deficit = () => {
    return caloriesPerWeekCurrent() - caloriesPerWeekMaintain()
  }

  const looseOrGain = () => {
    return ((deficit() * 0.45) / 3500).toFixed(2)
  }

  // const totalCaloriesPerWeekMaintain = () => {
  //   const trainingDaysWeeklyCalories =
  //     (state.tdee + 450) * state.workoutsPerWeek

  //   const restDaysWeeklyCalories = state.tdee * (7 - state.workoutsPerWeek)
  //   // console.log(restDaysWeeklyCalories)
  //   const totalCaloriesPerWeek =
  //     trainingDaysWeeklyCalories + restDaysWeeklyCalories
  //   // console.log(totalCaloriesPerWeek)
  //   // const totalCalPerWeek = Math.round(totalCaloriesPerWeek - state.tdee)
  //   return totalCaloriesPerWeek
  // }

  // const weeklyDeficit = () => {
  //   const trainingDaysWeeklyCalories =
  //     state.trainingCalories * state.workoutsPerWeek

  //   const restDaysWeeklyCalories =
  //     state.restCalories * (7 - state.workoutsPerWeek)
  //   // console.log(restDaysWeeklyCalories)
  //   const totalCaloriesPerWeek =
  //     trainingDaysWeeklyCalories + restDaysWeeklyCalories
  //   // console.log(totalCaloriesPerWeek)
  //   // const totalCalPerWeek = Math.round(totalCaloriesPerWeek - state.tdee)
  //   const weeklyDeficit = totalCaloriesPerWeek - totalCaloriesPerWeekMaintain()
  //   return weeklyDeficit
  // }deficit

  return (
    <>
      <div className="my-4">
        <h5 className="font-weight-bold d-flex align-items-center">
          <span>Maintain/wk</span>
          <span className="ml-auto">{caloriesPerWeekMaintain()} Cal</span>
        </h5>
        <h5 className="font-weight-bold d-flex align-items-center">
          <span>Intake/wk</span>
          <span className="ml-auto">{caloriesPerWeekCurrent()} Cal</span>
        </h5>
        <h5 className="font-weight-bold d-flex align-items-center">
          <span>
            {Math.sign(deficit()) === 1 ? "Surplus/wk" : "Deficit/wk"}
          </span>
          <span className="ml-auto">{deficit()} Cal</span>
        </h5>
        <h5 className="font-weight-bold d-flex align-items-center">
          <span>{Math.sign(deficit()) === 1 ? "Gain/wk" : "Loose/wk"}</span>
          <span className="ml-auto">{looseOrGain()} kg</span>
        </h5>
      </div>
    </>
  )
}

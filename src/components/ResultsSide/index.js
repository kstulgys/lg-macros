import React, { useState, useEffect } from "react"
import { CardHeader, CardTitle, Card, CardBody } from "shards-react"
import FiberIntake from "./FiberIntake"
import CaloriesWithFiber from "./CaloriesWithFiber"

import Store from "../../store"

export default function ResultsSide() {
  const { state, setState } = Store.useStore()
  // Fat-Free Mass (FFM): FFM [kg] = weight [kg] × (1 − (body fat [%] / 100))
  // Normalized Fat-Free Mass Index:
  //  FFMI = FFM  / (height )'2 + 6.1 × (1.8 − height)

  const setBaseCalories = () => {
    const multiplyier = [
      state.sexValue,
      state.heightValue,
      state.bodyFatValue,
      state.ageValue,
      state.stepsValue,
      state.muscularValue
    ].reduce((prev, next) => prev + next, 0)
    const baseCalories = Math.round(multiplyier * state.weight - 500)
    setState(state => {
      state.baseCalories = baseCalories
    })
  }
  useEffect(
    () => {
      setBaseCalories()
    },
    [state]
  )

  const getTrainingCalories = () => {
    return Math.round(state.baseCalories * 1.075)
  }

  const getRestCalories = () => {
    return Math.round(state.baseCalories * 0.925)
  }

  const carbsGrams = cals => Math.round((cals * 0.225) / 4)
  const fatsGrams = cals => Math.round((cals * 0.225) / 9)

  const proteinGrams = cals => Math.round((cals * 0.55) / 4)

  // <h5 className="font-weight-bold" />
  return (
    <Card>
      <CardHeader className="pb-1">
        <h5 className="font-weight-bold">
          Base calories: {state.baseCalories} Cal
        </h5>
      </CardHeader>
      <CardBody>
        <h5 className="font-weight-bold">TD Macros</h5>
        <h5>{getTrainingCalories()} Cal</h5>
        <h5>C: {carbsGrams(getTrainingCalories())} g (22.5 %)</h5>
        <h5>F: {fatsGrams(getTrainingCalories())} g (22.5 %)</h5>
        <h5>P: {proteinGrams(getTrainingCalories())} g (55 %)</h5>
        <br />
        <h5 className="font-weight-bold">RD Macros</h5>
        <h5 className="">{getRestCalories()} Cal</h5>
        <h5>C: {carbsGrams(getRestCalories())} g (22.5 %)</h5>
        <h5>F: {fatsGrams(getRestCalories())}g (22.5 %)</h5>
        <h5>P: {proteinGrams(getRestCalories())} g (55 %)</h5>
        <br />
        <FiberIntake />
        <CaloriesWithFiber />
      </CardBody>
    </Card>
  )
}

import React, { useState, useEffect } from "react"
import { FormCheckbox, FormInput } from "shards-react"
import Store from "./store"

function Results() {
  const { state, setState } = Store.useStore()

  // Fat-Free Mass (FFM): FFM [kg] = weight [kg] × (1 − (body fat [%] / 100))

  // Normalized Fat-Free Mass Index:
  //  FFMI = FFM  / (height )'2 + 6.1 × (1.8 − height)

  const getBaseCalories = () => {
    const multiplyier = [
      state.sexValue,
      state.heightValue,
      state.bodyFatValue,
      state.ageValue,
      state.stepsValue,
      state.muscularValue
    ].reduce((prev, next) => prev + next, 0)
    const baseCalories = Math.round(multiplyier * state.weight - 500)
    return baseCalories
  }

  const getTrainingCalories = () => {
    return Math.round(getBaseCalories() * 1.075)
  }

  const getRestCalories = () => {
    return Math.round(getBaseCalories() * 0.925)
  }

  const getTrainingCaloriesWithFiber = () => {
    return Math.round(getBaseCalories() * 1.075) + 140
  }

  const getRestCaloriesWithFiber = () => {
    return Math.round(getBaseCalories() * 0.925) + 140
  }

  const carbsGrams = cals => Math.round((cals * 0.225) / 4)
  const fatsGrams = cals => Math.round((cals * 0.225) / 9)

  const proteinGrams = cals => Math.round((cals * 0.55) / 4)

  return (
    <div>
      <h3>Base Cal: {getBaseCalories()} Cal</h3>
      <br />
      <h3>Training Day Macros</h3>
      <h4>{getTrainingCalories()} Cal</h4>
      <h4>C: {carbsGrams(getTrainingCalories())} g (22.5 %)</h4>
      <h4>F: {fatsGrams(getTrainingCalories())} g (22.5 %)</h4>
      <h4>P: {proteinGrams(getTrainingCalories())} g (55 %)</h4>
      <br />
      <h3>Rest Day Macros</h3>
      <h4>{getRestCalories()} Cal</h4>
      <h4>C: {carbsGrams(getRestCalories())} g (22.5 %)</h4>
      <h4>F: {fatsGrams(getRestCalories())} g (22.5 %)</h4>
      <h4>P: {proteinGrams(getRestCalories())} g (55 %)</h4>
      <br />
      <h3>
        MyfitnessPal counts total carbs and not the Net Carbs for the calories.
      </h3>
      <h4>I.e fiber intake/day ~35g => +140 Cal</h4>
      <h4>It's OK to have these numbers in MFP:</h4>
      <h4>Training Cal: {getTrainingCaloriesWithFiber()} Cal</h4>
      <h4>Rest Cal: {getRestCaloriesWithFiber()} Cal</h4>
    </div>
  )
}

export default Results

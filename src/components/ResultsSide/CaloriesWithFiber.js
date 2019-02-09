import React, { useState, useEffect } from "react"
import { CardHeader, CardTitle, Card, CardBody } from "shards-react"
import FiberIntake from "./FiberIntake"
import Store from "../../store"

export default function CaloriesWithFiber() {
  const { state, setState } = Store.useStore()

  // Fat-Free Mass (FFM): FFM [kg] = weight [kg] × (1 − (body fat [%] / 100))

  // Normalized Fat-Free Mass Index:
  //  FFMI = FFM  / (height )'2 + 6.1 × (1.8 − height)

  const getTrainingCaloriesWithFiber = () => {
    return Math.round(state.baseCalories * 1.075) + state.fiberIntake * 4
  }

  const getRestCaloriesWithFiber = () => {
    return Math.round(state.baseCalories * 0.925) + state.fiberIntake * 4
  }

  return (
    <>
      <h5 className="font-weight-bold">
        TD: {getTrainingCaloriesWithFiber()} Cal
      </h5>
      <h5 className="font-weight-bold">RD: {getRestCaloriesWithFiber()} Cal</h5>
    </>
  )
}

import React, { useState, useEffect } from "react"
import { CardHeader, CardTitle, Card, CardBody } from "shards-react"
import SelectCalDeficit from "./SelectCalDeficit"
import SelectFiberIntake from "./SelectFiberIntake"
import SelectMacroSplit from "./SelectMacroSplit"

import Store from "../../store"

export default function ResultsSide() {
  const { state, setState } = Store.useStore()
  // Fat-Free Mass (FFM): FFM [kg] = weight [kg] × (1 − (body fat [%] / 100))
  // Normalized Fat-Free Mass Index:
  //  FFMI = FFM  / (height )'2 + 6.1 × (1.8 − height)

  const setBaseAndTdeeCalories = () => {
    const multiplyier = [
      state.sexValue,
      state.heightValue,
      state.bodyFatValue,
      state.ageValue,
      state.stepsValue,
      state.muscularValue
    ].reduce((prev, next) => prev + next, 0)
    const tdee = Math.round(multiplyier * state.weight)
    setState(state => {
      state.tdee = tdee
      state.baseCalories = state.tdee - state.calDeficit
    })
  }
  useEffect(
    () => {
      setBaseAndTdeeCalories()
      // console.log(
      //   state.trainingProteinSplit,
      //   state.trainingCarbsSplit,
      //   state.trainingFatsSplit
      // )
    },
    [state]
  )

  const getTrainingCalories = () => {
    return Math.round(state.baseCalories * 1.075)
  }

  const getRestCalories = () => {
    return Math.round(state.baseCalories * 0.925)
  }

  const getProteinGrams = (cals, proteinSplit) =>
    Math.round((cals * proteinSplit) / 4)
  const getCarbsGrams = (cals, carbsSplit) =>
    Math.round(((cals - state.fiberIntake * 2) * carbsSplit) / 4)
  const getFatsGrams = (cals, fatsSplit) => Math.round((cals * fatsSplit) / 9)

  // macroSplitArray, macro, day
  const proteinMacroSplit = [
    { text: "60", value: 0.6 },
    { text: "55", value: 0.55 },
    { text: "50", value: 0.5 },
    { text: "45", value: 0.45 },
    { text: "40", value: 0.4 }
  ]

  const getCarbsSplitArray = proteinSplit => {
    const carbsMacroSplit = [
      { text: "55", value: 0.55 },
      { text: "50", value: 0.5 },
      { text: "45", value: 0.45 },
      { text: "40", value: 0.4 },
      { text: "35", value: 0.35 },
      { text: "30", value: 0.3 },
      { text: "25", value: 0.25 },
      { text: "20", value: 0.2 },
      { text: "15", value: 0.15 },
      { text: "10", value: 0.1 }
    ]
    return carbsMacroSplit.filter(item => item.value < 1 - proteinSplit)
  }

  return (
    <Card>
      <CardHeader className="pb-1">
        <h5 className="font-weight-bold text-center">TDEE: {state.tdee} Cal</h5>
        <SelectCalDeficit />
        <SelectFiberIntake />
        <h5 className="font-weight-bold text-center">
          Base: {state.baseCalories} Cal
        </h5>
      </CardHeader>
      <CardBody className="pt-5">
        <h5 className="font-weight-bold">
          Training: {getTrainingCalories()} Cal
        </h5>
        <h5 className="d-flex align-items-center ">
          P:{" "}
          {getProteinGrams(getTrainingCalories(), state.trainingProteinSplit)} g
          <SelectMacroSplit
            macroSplitArray={proteinMacroSplit}
            macro="p"
            day="training"
          />
        </h5>
        <h5 className="d-flex align-items-center w-100">
          C: {getCarbsGrams(getTrainingCalories(), state.trainingCarbsSplit)} g
          <SelectMacroSplit
            macroSplitArray={getCarbsSplitArray(state.trainingProteinSplit)}
            macro="c"
            day="training"
          />
        </h5>
        <h5 className="d-flex align-items-center">
          F: {getFatsGrams(getTrainingCalories(), state.trainingFatsSplit)} g
          <SelectMacroSplit macroSplitArray={[]} macro="f" day="training" />
        </h5>

        <h5 className="font-weight-bold mt-5">Rest: {getRestCalories()} Cal</h5>
        <h5 className="d-flex align-items-center ">
          P: {getProteinGrams(getRestCalories(), state.trainingProteinSplit)} g
          <SelectMacroSplit
            macroSplitArray={proteinMacroSplit}
            macro="p"
            day="rest"
          />
        </h5>
        <h5 className="d-flex align-items-center w-100">
          C: {getCarbsGrams(getRestCalories(), state.restCarbsSplit)} g
          <SelectMacroSplit
            macroSplitArray={getCarbsSplitArray(state.restProteinSplit)}
            macro="c"
            day="rest"
          />
        </h5>
        <h5 className="d-flex align-items-center">
          F: {getFatsGrams(getRestCalories(), state.restFatsSplit)} g
          <SelectMacroSplit macroSplitArray={[]} macro="f" day="rest" />
        </h5>
      </CardBody>
    </Card>
  )
}

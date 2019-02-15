import React, { useState, useEffect } from "react"
import { CardHeader, CardTitle, Card, CardBody } from "shards-react"
import SelectCalDeficit from "./SelectCalDeficit"
import SelectFiberIntake from "./SelectFiberIntake"
import SelectMacroSplit from "./SelectMacroSplit"

import Store from "../../store"

export default function ResultsSide() {
  const { state, setState } = Store.useStore()

  const setBaseAndTdeeCalories = () => {
    const multiplier = [
      state.sexValue,
      state.heightValue,
      state.bodyFatValue,
      state.ageValue,
      state.stepsValue,
      state.muscularValue
    ].reduce((prev, next) => prev + next, 0)
    const tdee = Math.round(multiplier * state.weight)
    setState(state => {
      state.multiplier = multiplier
      state.tdee = tdee
      state.baseCalories = state.tdee - state.calDeficit
      state.trainingCalories = Math.round(state.baseCalories * 1.075)
      state.restCalories = Math.round(state.baseCalories * 0.925)
      state.trainingProteinGrams = Math.round(
        (state.trainingCalories * state.trainingTotalMacroSplit[0]) / 4
      )
      state.trainingCarbsGrams = Math.round(
        ((state.trainingCalories - state.fiberIntake * 2) *
          state.trainingTotalMacroSplit[1]) /
          4
      )
      state.trainingFatsGrams = Math.round(
        (state.trainingCalories * state.trainingTotalMacroSplit[2]) / 9
      )

      state.restProteinGrams = Math.round(
        (state.restCalories * state.restTotalMacroSplit[0]) / 4
      )
      state.restCarbsGrams = Math.round(
        ((state.restCalories - state.fiberIntake * 2) *
          state.restTotalMacroSplit[1]) /
          4
      )
      state.restFatsGrams = Math.round(
        (state.restCalories * state.restTotalMacroSplit[2]) / 9
      )
    })
  }

  useEffect(
    () => {
      setBaseAndTdeeCalories()
    },
    [state]
  )

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
          Training: {state.trainingCalories} Cal
        </h5>
        <h5 className="d-flex align-items-center ">
          P: {state.trainingProteinGrams} g
          <SelectMacroSplit macro="p" day="training" />
        </h5>
        <h5 className="d-flex align-items-center w-100">
          C: {state.trainingCarbsGrams} g
          <SelectMacroSplit macro="c" day="training" />
        </h5>
        <h5 className="d-flex align-items-center">
          F: {state.trainingFatsGrams} g
          <SelectMacroSplit macroSplitArray={[]} macro="f" day="training" />
        </h5>

        <h5 className="font-weight-bold mt-5">
          Rest: {state.restCalories} Cal
        </h5>
        <h5 className="d-flex align-items-center ">
          P: {state.restProteinGrams} g
          <SelectMacroSplit macro="p" day="rest" />
        </h5>
        <h5 className="d-flex align-items-center w-100">
          C: {state.restCarbsGrams} g
          <SelectMacroSplit macro="c" day="rest" />
        </h5>
        <h5 className="d-flex align-items-center">
          F: {state.restFatsGrams} g
          <SelectMacroSplit macro="f" day="rest" />
        </h5>
      </CardBody>
    </Card>
  )
}

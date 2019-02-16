import React, { useState, useEffect } from 'react'
import { CardHeader, CardTitle, Card, CardBody } from 'shards-react'
import SelectCalDeficit from './SelectCalDeficit'
import SelectFiberIntake from './SelectFiberIntake'
import SelectMacroSplit from './SelectMacroSplit'
import TotalCaloriesInfoCard from './TotalCaloriesInfoCard'

import Store from '../../store'

export default function ResultsSide() {
  const { state, setState } = Store.useStore()

  const setCaloriesAndMacros = () => {
    // console.log(state.fiberIntake)

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
      state.trainingProteinGrams = Number(
        (
          (state.trainingCalories * state.trainingTotalMacroSplit[0]) /
          4
        ).toFixed(1)
      )
      state.trainingCarbsGrams = Number(
        (
          (state.trainingCalories * state.trainingTotalMacroSplit[1]) /
          4
        ).toFixed(1)
      )
      state.trainingFatsGrams = Number(
        (
          (state.trainingCalories * state.trainingTotalMacroSplit[2]) /
          9
        ).toFixed(1)
      )

      state.restProteinGrams = Number(
        ((state.restCalories * state.restTotalMacroSplit[0]) / 4).toFixed(1)
      )
      state.restCarbsGrams = Number(
        (
          ((state.restCalories - state.fiberIntake * 2) *
            state.restTotalMacroSplit[1]) /
          4
        ).toFixed(1)
      )
      state.restFatsGrams = Number(
        ((state.restCalories * state.restTotalMacroSplit[2]) / 9).toFixed(1)
      )
    })
  }

  useEffect(() => {
    setCaloriesAndMacros()
  }, [state])

  return (
    <Card>
      <CardHeader className="pb-1">
        <h5 className="font-weight-bold d-flex">
          <span>TDEE</span>
          <span className="ml-auto">{state.tdee} Cal</span>
        </h5>
        <SelectCalDeficit />
        <SelectFiberIntake />

        <h5 className="font-weight-bold d-flex mt-3">
          <span>Base</span>
          <span className="ml-auto">{state.baseCalories} Cal</span>
        </h5>
      </CardHeader>

      <CardBody className="p-3 m-sm-3">
        <div>
          <TotalCaloriesInfoCard day="training" />
        </div>
        <div className="mt-5 pt-1">
          <TotalCaloriesInfoCard day="rest" />
        </div>
      </CardBody>
    </Card>
  )
}

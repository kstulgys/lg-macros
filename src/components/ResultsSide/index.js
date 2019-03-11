import React, { useState, useEffect } from "react"
import {
  CardHeader,
  CardTitle,
  Card,
  CardBody,
  FormSelect,
  Modal,
  ModalHeader,
  ModalBody
} from "shards-react"
import { FaInfoCircle } from "react-icons/fa"
import SelectCalDeficit from "./SelectCalDeficit"
import SelectCalSplit from "./SelectCalSplit"
import SelectFiberIntake from "./SelectFiberIntake"
import SelectMacroSplit from "./SelectMacroSplit"
import TotalCaloriesInfoCard from "./TotalCaloriesInfoCard"
import SelectWorkoutsPerWeek from "./SelectWorkoutsPerWeek"
import WeeklyDeficit from "./WeeklyDeficit"

import Store from "../../store"

export default function ResultsSide() {
  const { state, setState } = Store.useStore()
  const [open, onToggle] = useState(false)

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
      state.baseCalories = state.tdee + state.calDeficit
      state.trainingCalories = state.useWorkoutsPerWeek
        ? Math.round(
            (state.baseCalories * 7) /
              (state.workoutsPerWeek +
                (7 - state.workoutsPerWeek) * (1 - state.calSplit))
          )
        : Math.round(state.baseCalories * (1 + state.calSplit))

      state.restCalories = state.useWorkoutsPerWeek
        ? Math.round(
            ((state.baseCalories * 7) /
              (state.workoutsPerWeek +
                (7 - state.workoutsPerWeek) * (1 - state.calSplit))) *
              (1 - state.calSplit)
          )
        : Math.round(state.baseCalories * (1 - state.calSplit))

      state.trainingProteinGrams = Math.round(
        (state.trainingCalories * state.trainingTotalMacroSplit[0]) / 4
      )
      state.trainingCarbsGrams = Math.round(
        (state.trainingCalories * state.trainingTotalMacroSplit[1] -
          state.fiberIntake * 2) /
          4
      )
      state.trainingFatsGrams = Math.round(
        (state.trainingCalories * state.trainingTotalMacroSplit[2]) / 9
      )

      state.restProteinGrams = Math.round(
        (state.restCalories * state.restTotalMacroSplit[0]) / 4
      )
      state.restCarbsGrams = Math.round(
        (state.restCalories * state.restTotalMacroSplit[1] -
          state.fiberIntake * 2) /
          4
      )
      state.restFatsGrams = Math.round(
        (state.restCalories * state.restTotalMacroSplit[2]) / 9
      )
      state.calDeficitPercent = Number(
        (state.calDeficit / state.tdee).toFixed(3)
      )
    })
  }

  useEffect(
    () => {
      setCaloriesAndMacros()
    },
    [state]
  )
  // Sedentary(little or no exercise): BMR x 1.2
  // Lightly active(training / sports 2 - 3 days / week): BMR x 1.375
  // Moderately active(training / sports 4 - 5 days / week): BMR x 1.55
  // Very active(training / sports 6 - 7 days a week): BMR x 1.725
  // Extremely active(twice per day, extra heavy workouts): BMR x 1.9
  return (
    <Card>
      <CardHeader className="pb-1">
        <h5 className="font-weight-bold d-flex my-4">
          <span>TDEE (LG)</span>
          <span className="ml-auto">{state.tdee} Cal</span>
        </h5>
        <SelectCalDeficit />
        <h5 className="font-weight-bold d-flex my-4">
          <span>Fat loss/wk</span>
          <span className="ml-auto">{state.baseCalories} kg</span>
        </h5>
        <SelectWorkoutsPerWeek />

        <h5 className="font-weight-bold d-flex my-4">
          <span>Base</span>
          <span className="ml-auto">{state.baseCalories} Cal</span>
        </h5>
        <SelectCalSplit />
        <h5 className="font-weight-bold d-flex my-4">
          <span>Training</span>
          <span className="ml-auto">{state.trainingCalories} Cal</span>
        </h5>
        <h5 className="font-weight-bold d-flex my-4">
          <span>Rest</span>
          <span className="ml-auto">{state.restCalories} Cal</span>
        </h5>
        <WeeklyDeficit />
        <SelectFiberIntake />
      </CardHeader>

      <CardBody className="p-3 m-sm-3">
        <div className="mt-5 mt-sm-3">
          <TotalCaloriesInfoCard day="training" />
        </div>
        <div className="py-3 py-sm-0 mt-5 mb-3">
          <TotalCaloriesInfoCard day="rest" />
        </div>
      </CardBody>
    </Card>
  )
}

// <h5 className="font-weight-bold d-flex align-items-center my-4">
//   <span className="mr-2">BMR</span>
//   <FormSelect className="w-50">
//     <option value="first">Sedentary</option>
//     <option value="second">Lightly active</option>
//     <option value="second">Moderately active</option>
//     <option value="second">Very active</option>
//     <option value="second">Extremely active</option>
//   </FormSelect>
//   <FaInfoCircle onClick={() => onToggle(!open)} className="ml-2" />
//   <Modal open={open} toggle={() => onToggle(!open)}>
//     <ModalBody>
//       <p> BMR = 370 + 21.6 * Lean Body Mass (in kg)</p>
//       <p>Sedentary (little or no exercise): BMR x 1.2 </p>
//       <p>
//         Lightly active (training / sports 2 - 3 days / week): BMR x
//         1.375
//               </p>
//       <p>
//         Moderately active (training / sports 4 - 5 days / week): BMR x
//         1.55
//               </p>
//       <p>
//         Very active (training / sports 6 - 7 days a week): BMR x1.725
//               </p>
//       <p>
//         Extremely active (twice per day, extra heavy workouts): BMR x
//         1.9
//               </p>
//     </ModalBody>
//   </Modal>
//   <span className="ml-auto">{state.tdee} Cal</span>
// </h5>

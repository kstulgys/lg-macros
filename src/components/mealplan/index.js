import React, { useEffect, useState, useRef } from "react"
import { Button } from "shards-react"
import SelectMealSize from "./SelectMealSize"
import Store from "../../store"
import AddMeal from "./AddMeal"
import RemoveMeal from "./RemoveMeal"
import MealCard from "./MealCard"

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default function MealPlan() {
  const { state, setState } = Store.useStore()
  const prevMeals = usePrevious(state.trainingMeals)

  const makeNumberNormal = num => {
    return Number(num.toFixed(2))
  }

  useEffect(
    () => {
      const mealsTotal = state.trainingMeals.reduce((prev, next) => {
        return makeNumberNormal(prev + next)
      }, 0)
      const mealsLength = state.trainingMeals.length
      const mealsSurplus = makeNumberNormal(mealsTotal - 1)
      const mealsDeficit = makeNumberNormal(1 - mealsTotal)
      const isSurplus = mealsSurplus > 0 ? true : false

      if (mealsSurplus === 0) {
        return
      }

      if (isSurplus) {
        setState(state => {
          state.trainingMeals.pop()
        })
        return
      }

      if (!isSurplus) {
        setState(state => {
          state.trainingMeals[mealsLength] = mealsDeficit
        })
        return
      }
    },
    [state.trainingMeals]
  )

  return (
    <>
      <div className="container-fluid">
        <h5 className="font-weight-bold text-center mt-4">
          Meal sizing (training)
        </h5>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
          {state.trainingMeals.map((m, i) => (
            <div key={`${i}-${m}`}>
              <SelectMealSize size={m} index={i} />
            </div>
          ))}
        </div>
        <div className="mt-5 d-flex flex-wrap justify-content-center">
          {state.trainingMeals.map((m, i) => {
            return (
              <div key={`${i}-${m}`}>
                <MealCard size={m} />
              </div>
            )
          })}
        </div>
        <div>
          <div className="my-5 text-center">
            <h5>{state.trainingCalories} Cal</h5>
            <h5>{state.restCalories} Cal</h5>
          </div>
        </div>
      </div>
    </>
  )
}

// <Button className="mt-4" theme="dark">
//   Generate
//         </Button>
// <AddMeal />
// <RemoveMeal />

// <form method="POST" action="https://formspree.io/karolis.stulgys@gmail.com">
//   <div className="form-group">
//     <input
//       name="email"
//       type="email"
//       className="form-control shadow-lg"
//       placeholder="Your email"
//     />
//   </div>
//   <div className="form-group">
//     <textarea
//       name="message"
//       type="text"
//       className="form-control shadow-lg"
//       rows="4"
//       placeholder="Your message"
//     />
//   </div>
//   <div className="card shadow-lg bg-transparent">
//     <div className="card-body text-center p-2">
//       <button
//         style={{ cursor: "pointer" }}
//         type="submit"
//         className="h5 bg-transparent border-0 text-uppercase font-weight-bold text-white">
//         Submit
//           </button>
//     </div>
//   </div>
// </form>

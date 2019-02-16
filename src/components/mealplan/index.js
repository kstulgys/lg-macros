import React, { useEffect, useState, useRef } from 'react'
import { Button } from 'shards-react'
import MealsSizeList from './MealsSizeList'
import Store from '../../store'
// import MealCardList from "./MealCardList"
// import TotalCaloriesInfoCard from "./TotalCaloriesInfoCard"

export default function MealPlan() {
  const { state, setState } = Store.useStore()
  // const prevMeals = usePrevious(state.trainingMeals)

  const fixedNum = num => {
    return Number(num.toFixed(2))
  }

  // useEffect(() => {
  //   if (state.trainingMeals.length > 10) {
  //     setState(state => {
  //       state.trainingMeals = [
  //         { size: 0.2, macroSplit: [0.5, 0.25, 0.25] },
  //         { size: 0.2, macroSplit: [0.5, 0.25, 0.25] },
  //         { size: 0.6, macroSplit: [0.5, 0.25, 0.25] }
  //       ]
  //     })
  //   }
  // }, [])

  useEffect(() => {
    const mealsTotal = state.trainingMeals.reduce((prev, obj) => {
      return prev + obj.size
    }, 0)

    // console.log(mealsTotal)
    const mealsLength = state.trainingMeals.length
    // console.log("mealsLength", mealsLength)

    const mealsSurplus = fixedNum(mealsTotal - 1)
    const mealsDeficit = fixedNum(1 - mealsTotal)
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
      const newMeal = {
        size: mealsDeficit,
        macroSplit: [0.5, 0.25, 0.25]
      }
      setState(state => {
        state.trainingMeals[mealsLength] = newMeal
      })
      return
    }
  }, [state.trainingMeals])

  return (
    <div>
      <h5 className="font-weight-bold text-center mt-4">
        Meal sizing (training)
      </h5>
      <MealsSizeList />
    </div>
  )
}
// <TotalCaloriesInfoCard />

// function usePrevious(value) {
//   const ref = useRef()
//   useEffect(() => {
//     ref.current = value
//   })
//   return ref.current
// }

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
